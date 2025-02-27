import { Factory } from 'rosie';

import { ChannelParticipant } from '../../types/models/ChannelParticipant.js'
import { ChannelParticipantFactory } from './definitions.js';
import { ModelType } from '../../types/enums.js';
import chance from '../../helpers/chance.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';

const channelParticipantFactory = Factory.define<ChannelParticipant>('ChannelParticipant', ChannelParticipant)
  .attr('createdAt', () => new Date(Date.now() - chance.integer({
    min: 24 * 3600 * 1000, // youngest is 1 day old
    max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
  }))) as ChannelParticipantFactory;

channelParticipantFactory.create = (
  props: Partial<ChannelParticipant> | Partial<ChannelParticipant>[],
  options?: any,
  count?: number,
): Promise<ChannelParticipant | ChannelParticipant[]> => create<ChannelParticipant>(props, options, count);

channelParticipantFactory.save = async (channelParticipant: ChannelParticipant): Promise<ChannelParticipant> => save(channelParticipant);

channelParticipantFactory.delete = async (channelParticipant: ChannelParticipant): Promise<ChannelParticipant> => {
  await deleteFunc(channelParticipant.id, ModelType.ChannelParticipant);

  return channelParticipant;
};


export default channelParticipantFactory
