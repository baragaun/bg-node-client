import { Factory } from 'rosie';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
const channelInvitationFactory = Factory.define('ChannelInvitation', ChannelInvitation)
    .attr('channelName', () => chance.word())
    .attr('channelTopic', () => chance.sentence())
    .attr('messageText', () => chance.sentence())
    .attr('createdAt', () => randomDate());
channelInvitationFactory.create = (props, options, count) => create(props, ModelType.ChannelInvitation, options, count);
channelInvitationFactory.save = async (channelInvitation) => save(channelInvitation);
channelInvitationFactory.delete = async (channelInvitation) => {
    await deleteFunc(channelInvitation.id, ModelType.ChannelInvitation);
    return channelInvitation;
};
export default channelInvitationFactory;
//# sourceMappingURL=channelInvitation.js.map