import { buildStreamName } from './buildStreamName.js';
import close from './close.js';
import { consumeStream } from './consumeStream.js';
import { createConsumer } from './createConsumer.js';
import { createStream } from './createStream.js';
import { deleteConsumer } from './deleteConsumer.js';
import { deleteStream } from './deleteStream.js';
import { fetchMessages } from './fetchMessages.js';
import { findStreamNameBySubject } from './findStreamNameBySubject.js';
import { getNextMessage } from './getNextMessage.js';
import { getOrderedConsumer } from './getOrderedConsumer.js';
import { getStream } from './getStream.js';
import init from './init.js';
import natsStore from './natsStore.js';
import { publishChannelEvent, publishMessage, publishUserEvent, } from './publishMessage.js';
import { subscribeToChannelEvents } from './subscribeToChannelEvents.js';
import { subscribeToMyChannelEvents } from './subscribeToMyChannelEvents.js';
const natsService = {
    addSubscription: (subject, options) => {
        natsStore.addSubscription(subject, options);
    },
    buildStreamName,
    close,
    consumeStream,
    createConsumer,
    createStream,
    deleteConsumer,
    deleteStream,
    fetchMessages,
    findStreamNameBySubject,
    getNextMessage,
    getOrderedConsumer,
    getStream,
    init,
    publishChannelEvent,
    publishMessage,
    publishUserEvent,
    subscribeToMyChannelEvents,
    subscribeToChannelEvents,
};
export default natsService;
//# sourceMappingURL=index.js.map