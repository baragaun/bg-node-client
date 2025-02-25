import FactoryGirl from 'factory-girl';
import { ModelType } from '../../types/enums.js';
import createChannel from '../../operations/createChannel.js';
import findById from '../../operations/findById.js';
const factory = FactoryGirl.factory;
describe('createChannel', () => {
    beforeAll(() => {
    });
    it('should create a channel with the given properties', async () => {
        const users = await factory.buildMany('User', 2);
        const userIds = users.map(u => u.id);
        const channelProps = await factory.build('Channel', {
            userIds,
        });
        const { object: channel } = await createChannel(channelProps);
        const { object: reloadedChannel } = await findById(channel.id, ModelType.Channel);
        expect(reloadedChannel.id).toBe(channel.id);
        expect(reloadedChannel.name).toBe(channel.name);
    });
});
//# sourceMappingURL=createChannel.spec.js.map