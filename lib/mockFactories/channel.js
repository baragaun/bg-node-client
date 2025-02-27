import { Channel } from '../types/models/Channel.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import createUser from './user.js';
import createChannelMessage from './channelMessage.js';
import chance from '../helpers/chance.js';
const createChannel = (attributes, userCount, messageCount, users, messages) => {
    if (!attributes.id) {
        attributes.id = crypto.randomUUID().replace('-', '');
    }
    if (!attributes.name) {
        attributes.name = chance.word();
    }
    if (!attributes.description) {
        attributes.description = chance.paragraph();
    }
    if (!attributes.topic) {
        attributes.topic = chance.sentence();
    }
    if (!attributes.createdAt) {
        attributes.createdAt = new Date();
    }
    if (!attributes.updatedAt) {
        attributes.updatedAt = new Date();
    }
    const channel = new Channel(attributes);
    if (!Array.isArray(users) || users.length < 1) {
        users = Array.from({ length: userCount }, () => {
            return createUser({});
        });
    }
    if (!Array.isArray(messages) || users.length < 1) {
        messages = Array.from({ length: messageCount }, () => {
            return createChannelMessage({ channelId: attributes.id });
        });
    }
    channel.userIds = users.map(user => user.id);
    channel.participants = users.map(user => new ChannelParticipant({
        id: crypto.randomUUID().replace('-', ''),
        channelId: channel.id,
        userId: user.id
    }));
    return {
        channel,
        messages,
        users,
    };
};
export default createChannel;
//# sourceMappingURL=channel.js.map