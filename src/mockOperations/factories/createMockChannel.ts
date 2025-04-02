import createChannelMessage from './createMockChannelMessage.js';
import createUser from './createMockUser.js';
import chance from '../../helpers/chance.js';
import { Channel } from '../../models/Channel.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { User } from '../../models/User.js';

const createMockChannel = (
  attributes: Partial<Channel>,
  userCount: number,
  messageCount: number,
  users?: User[],
  messages?: ChannelMessage[],
): { channel: Channel; messages: ChannelMessage[]; users: User[] } => {
  if (!attributes.id) {
    attributes.id = crypto.randomUUID().replaceAll('-', '');
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
    attributes.createdAt = new Date().toISOString();
  }

  if (!attributes.updatedAt) {
    attributes.updatedAt = new Date().toISOString();
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

  channel.userIds = users.map((user) => user.id);
  channel.participants = users.map(
    (user) =>
      new ChannelParticipant({
        id: crypto.randomUUID().replaceAll('-', ''),
        channelId: channel.id,
        userId: user.id,
      }),
  );

  return {
    channel,
    messages,
    users,
  };
};

export default createMockChannel;
