import { Factory } from 'rosie';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { ModelType } from '../../types/enums.js';
import chance from '../helpers/chance.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
const channelInvitationFactory = Factory.define('ChannelInvitation', ChannelInvitation)
    .attr('channelName', () => chance.word())
    .attr('channelTopic', () => chance.sentence())
    .attr('messageText', () => chance.sentence())
    .attr('createdAt', () => new Date(Date.now() - chance.integer({
    min: 24 * 3600 * 1000, // youngest is 1 day old
    max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
})));
channelInvitationFactory.create = (props, options, count) => create(props, options, count);
channelInvitationFactory.save = async (channelInvitation) => save(channelInvitation);
channelInvitationFactory.delete = async (channelInvitation) => {
    await deleteFunc(channelInvitation.id, ModelType.ChannelInvitation);
    return channelInvitation;
};
export default channelInvitationFactory;
//# sourceMappingURL=channelInvitation.js.map