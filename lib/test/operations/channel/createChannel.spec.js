import { describe, expect, test } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.createChannel', () => {
    test('should create a channel with the given properties', async () => {
        const client = await clientStore.getTestClient();
        const channelProps = await factories.channel.build({});
        const user = await signMeUpSpecHelper(undefined, false, client);
        expect(user).toBeDefined();
        const { object: channel } = await client.operations.channel.createChannel(channelProps);
        const { object: reloadedChannel, error } = await findById(channel.id, ModelType.Channel, {
            cachePolicy: CachePolicy.cache,
        });
        expect(error).toBeUndefined();
        expect(reloadedChannel.id).toBe(channel.id);
        expect(reloadedChannel.name).toBe(channel.name);
        expect(reloadedChannel.topic).toBe(channel.topic);
        expect(reloadedChannel.description).toBe(channel.description);
        expect(reloadedChannel.channelType).toBe(channel.channelType);
    });
});
//# sourceMappingURL=createChannel.spec.js.map