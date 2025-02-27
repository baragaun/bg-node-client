import { Factory } from 'rosie';

import chance from '../../helpers/chance.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js'
import { ChannelMessageType, ModelType } from '../../types/enums.js';
import { ChannelMessageFactory } from './definitions.js';
import create from './helpers/create.js';
import save from './helpers/save.js';
import deleteFunc from './helpers/delete.js';
import randomDate from '../../helpers/randomDate.js';

const channelMessageFactory = Factory.define<ChannelMessage>('ChannelMessage', ChannelMessage)
  .attr('channelMessageType', () => chance.pickone(Object.values(ChannelMessageType)))
  .attr('messageText', () => chance.sentence())
  .attr('createdAt', () => randomDate()) as ChannelMessageFactory;

channelMessageFactory.create = (
  props: Partial<ChannelMessage> | Partial<ChannelMessage>[],
  options?: any,
  count?: number,
): Promise<ChannelMessage | ChannelMessage[]> => create<ChannelMessage>(props, options, count);

channelMessageFactory.save = async (channelMessage: ChannelMessage): Promise<ChannelMessage> => save(channelMessage);

channelMessageFactory.delete = async (channelMessage: ChannelMessage): Promise<ChannelMessage> => {
  await deleteFunc(channelMessage.id, ModelType.ChannelMessage);

  return channelMessage;
};

export default channelMessageFactory
