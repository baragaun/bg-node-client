import { Factory } from 'rosie';
import randomDate from '../../helpers/randomDate.js';
import { ModelType } from '../../types/enums.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
const channelParticipantFactory = Factory.define('ChannelParticipant', ChannelParticipant).attr('createdAt', () => randomDate());
channelParticipantFactory.create = (props, options, count) => create(props, ModelType.ChannelParticipant, options, count);
channelParticipantFactory.save = async (channelParticipant) => save(channelParticipant);
channelParticipantFactory.delete = async (channelParticipant) => {
    await deleteFunc(channelParticipant.id, ModelType.ChannelParticipant);
    return channelParticipant;
};
export default channelParticipantFactory;
//# sourceMappingURL=channelParticipant.js.map