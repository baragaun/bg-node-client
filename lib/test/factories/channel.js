import { Factory } from 'rosie';
import { ChannelType, ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { Channel } from '../../models/Channel.js';
const channelFactory = Factory.define('Channel', Channel)
    .attr('channelType', () => chance.pickone(Object.values(ChannelType)))
    .attr('name', () => chance.word())
    .attr('topic', () => chance.sentence())
    .attr('description', () => chance.paragraph())
    .attr('createdAt', () => randomDate());
channelFactory.create = (props, options, count) => create(props, ModelType.Channel, options, count);
channelFactory.save = async (channel) => save(channel);
channelFactory.delete = async (channel) => {
    await deleteFunc(channel.id, ModelType.Channel);
    return channel;
};
export default channelFactory;
//# sourceMappingURL=channel.js.map