import { faker } from '@faker-js/faker';
import { Channel } from '../types/models/Channel.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import createUser from './user.js';
import createChannelMessage from './channelMessage.js';
const createChannel = (attributes, userCount, messageCount, users, messages) => {
    if (!attributes.id) {
        attributes.id = faker.string.uuid();
    }
    if (!attributes.name) {
        attributes.name = faker.lorem.word();
    }
    if (!attributes.description) {
        attributes.description = faker.lorem.paragraph();
    }
    if (!attributes.topic) {
        attributes.topic = faker.lorem.sentence();
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
    channel.messages = messages;
    channel.users = users;
    channel.userIds = users.map(user => user.id);
    channel.participants = users.map(user => new ChannelParticipant({
        id: faker.string.uuid(),
        channelId: channel.id,
        userId: user.id
    }));
    return channel;
};
export default createChannel;
//# sourceMappingURL=channel.js.map