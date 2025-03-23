import { Factory } from 'rosie';

import { ChannelParticipantFactory } from './definitions.js';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import randomDate from '../../helpers/randomDate.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';

const channelParticipantFactory = Factory.define<ChannelParticipant>(
  'ChannelParticipant',
  ChannelParticipant,
).attr('createdAt', () => randomDate()) as ChannelParticipantFactory;

channelParticipantFactory.create = (
  props: Partial<ChannelParticipant> | Partial<ChannelParticipant>[],
  options?: any,
  count?: number,
): Promise<ChannelParticipant | ChannelParticipant[]> =>
  create<ChannelParticipant>(
    props,
    ModelType.ChannelParticipant,
    options,
    count,
  );

channelParticipantFactory.save = async (
  channelParticipant: ChannelParticipant,
): Promise<ChannelParticipant> => save(channelParticipant);

channelParticipantFactory.delete = async (
  channelParticipant: ChannelParticipant,
): Promise<ChannelParticipant> => {
  await deleteFunc(channelParticipant.id, ModelType.ChannelParticipant);

  return channelParticipant;
};

export default channelParticipantFactory;
