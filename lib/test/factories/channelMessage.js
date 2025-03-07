import { Factory } from 'rosie';
import { ChannelMessageType, ModelType } from '../../enums.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
const channelMessageFactory = Factory.define('ChannelMessage', ChannelMessage)
    .attr('channelMessageType', () => chance.pickone(Object.values(ChannelMessageType)))
    .attr('messageText', () => chance.sentence())
    .attr('createdAt', () => randomDate());
channelMessageFactory.create = (props, options, count) => create(props, ModelType.ChannelMessage, options, count);
channelMessageFactory.save = async (channelMessage) => save(channelMessage);
channelMessageFactory.delete = async (channelMessage) => {
    await deleteFunc(channelMessage.id, ModelType.ChannelMessage);
    return channelMessage;
};
export default channelMessageFactory;
//# sourceMappingURL=channelMessage.js.map