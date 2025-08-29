import * as nats from '@nats-io/nats-core';
import libData from '../helpers/libData.js';
export const publishMessage = async (subject, data, options) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const js = await client.getJetStreamClient();
    const encoder = new TextEncoder();
    const payload = typeof data === 'string' ? encoder.encode(data) : encoder.encode(JSON.stringify(data));
    // Convert options to JetStreamPublishOptions format
    const publishOptions = {};
    if (options?.headers) {
        publishOptions.headers = nats.headers();
        for (const [key, value] of Object.entries(options.headers)) {
            publishOptions.headers.append(key, value);
        }
    }
    if (options?.msgID) {
        publishOptions.msgID = options.msgID;
    }
    if (options?.timeout) {
        publishOptions.timeout = options.timeout;
    }
    if (options?.expect) {
        publishOptions.expect = {};
        if (options.expect.lastMsgID)
            publishOptions.expect.lastMsgID = options.expect.lastMsgID;
        if (options.expect.streamName)
            publishOptions.expect.streamName = options.expect.streamName;
        if (options.expect.lastSequence)
            publishOptions.expect.lastSequence = options.expect.lastSequence;
        if (options.expect.lastSubjectSequence)
            publishOptions.expect.lastSubjectSequence = options.expect.lastSubjectSequence;
    }
    console.log('subject,publishOptions and payload', subject, payload, publishOptions);
    const pubAck = await js.publish(subject, payload, publishOptions);
    //todo publish never completes
    return pubAck.seq.toString();
};
//# sourceMappingURL=publishMessage.js.map