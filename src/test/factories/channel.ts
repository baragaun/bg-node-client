import { Factory } from 'rosie';

import { Channel } from '../../types/models/Channel.js';
import { ChannelFactory } from './definitions.js';
import { ChannelType, ModelType } from '../../types/enums.js';
import chance from '../../helpers/chance.js';
import create from './helpers/create.js';
import save from './helpers/save.js';
import deleteFunc from './helpers/delete.js';
import randomDate from '../../helpers/randomDate.js';

const channelFactory = Factory.define<Channel>('Channel', Channel)
  .attr('channelType', () => chance.pickone(Object.values(ChannelType)))
  .attr('name', () => chance.word())
  .attr('topic', () => chance.sentence())
  .attr('description', () => chance.paragraph())
  .attr('createdAt', () => randomDate()) as ChannelFactory;

channelFactory.create = (
  props: Partial<Channel> | Partial<Channel>[],
  options?: any,
  count?: number,
): Promise<Channel | Channel[]> => create<Channel>(props, ModelType.Channel, options, count);

channelFactory.save = async (channel: Channel): Promise<Channel> => save(channel);

channelFactory.delete = async (channel: Channel): Promise<Channel> => {
  await deleteFunc(channel.id, ModelType.Channel);

  return channel;
};

export default channelFactory;
