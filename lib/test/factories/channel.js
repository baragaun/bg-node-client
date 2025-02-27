import { Factory } from 'rosie';
import { Channel } from '../../types/models/Channel.js';
import { ChannelType, ModelType } from '../../types/enums.js';
import chance from '../../helpers/chance.js';
import create from './helpers/create.js';
import save from './helpers/save.js';
import deleteFunc from './helpers/delete.js';
const channelFactory = Factory.define('Channel', Channel)
    .attr('channelType', () => chance.pickone(Object.values(ChannelType)))
    .attr('createdAt', () => new Date(Date.now() - chance.integer({
    min: 24 * 3600 * 1000, // youngest is 1 day old
    max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
})));
channelFactory.create = (props, options, count) => create(props, options, count);
channelFactory.save = async (channel) => save(channel);
channelFactory.delete = async (channel) => {
    await deleteFunc(channel.id, ModelType.Channel);
    return channel;
};
export default channelFactory;
//# sourceMappingURL=channel.js.map