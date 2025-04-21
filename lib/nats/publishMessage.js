import * as nats from '@nats-io/nats-core';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
let encoder;
const publishImpl = async (subject, payload, options) => {
    const client = libData.natsClient();
    if (!client) {
        logger.error('nats.publishMessage: not connected.', { subject, payload, options });
        throw new Error('not-available');
    }
    if (!encoder) {
        encoder = new TextEncoder();
    }
    const jsClient = await client.getJetStreamClient();
    if (!jsClient) {
        logger.error('nats.publishMessage: no JetStream client.', { subject, payload, options });
        throw new Error('not-available');
    }
    const encodedPayload = typeof payload === 'string'
        ? encoder.encode(payload)
        : encoder.encode(JSON.stringify(payload));
    const jsOptions = {
        ...options,
        msgID: options?.msgID || crypto.randomUUID(),
        timeout: options?.timeout || 0,
        headers: options?.headers ? (() => {
            const h = nats.headers();
            Object.entries(options.headers).forEach(([key, value]) => h.append(key, value));
            return h;
        })() : nats.headers(),
        expect: {
            lastMsgID: options?.expect?.lastMsgID,
            streamName: options?.expect?.streamName,
            lastSequence: options?.expect?.lastSequence,
            lastSubjectSequence: options?.expect?.lastSubjectSequence,
        },
    };
    const pubAck = await jsClient.publish(subject, encodedPayload, jsOptions);
    logger.debug('nats.publishMessage: message published.', { subject, payload, options, pubAck });
    return pubAck;
};
export const publishMessage = (subject, payload, options, callback) => {
    publishImpl(subject, payload, options)
        .then((ack) => {
        logger.debug('nats.publishMessage: message published successfully.', {
            subject, payload, options, ack,
        });
        callback?.(null, ack);
    })
        .catch((error) => {
        logger.error('nats.publishMessage: error publishing message.', {
            subject, payload, options, error,
        });
        callback?.(error);
    });
};
//# sourceMappingURL=publishMessage.js.map