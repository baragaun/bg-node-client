import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import { testConfig } from '../../testConfig.js';
describe('operations.channel.createChannel', () => {
    test('should create a channel with the given properties', async () => {
        const client = await new BgNodeClient().init(testConfig);
        const channelProps = await factories.channel.build({});
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