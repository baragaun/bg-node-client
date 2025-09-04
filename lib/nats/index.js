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
import { publishMessage } from './publishMessage.js';
import subscribeToChannelMessages from './subscribeToChannelMessages.js';
import subscribeToMyChannels from './subscribeToMyChannels.js';
const natsService = {
    addSubscription: (subject, options) => {
        natsStore.addSubscription(subject, options);
    },
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
    publishMessage,
    subscribeToChannelMessages,
    subscribeToMyChannels,
};
export default natsService;
//# sourceMappingURL=index.js.map