import { describe, expect, test } from 'vitest';
import bgNodeClient from '../../../bgNodeClient.js';
import findById from '../../../operations/findById.js';
import { CachePolicy, ModelType } from '../../../types/enums.js';
import factories from '../../factories/factories.js';
import { testConfig } from '../../testConfig.js';
describe('updateChannel', () => {
    test('should update channel properties', async () => {
        await bgNodeClient.init(testConfig);
        const channelProps = await factories.channel.build({});
        const { object: channel } = await bgNodeClient.operations.channel.createChannel(channelProps);
        await bgNodeClient.operations.channel.updateChannel({ id: channel.id, name: 'newname' });
        const { object: updatedChannel, error: updateError } = await findById(channel.id, ModelType.Channel, {
            cachePolicy: CachePolicy.cache,
        });
        expect(updateError).toBeUndefined();
        expect(updatedChannel.id).toBe(channel.id);
        expect(updatedChannel.name).toBe('newname');
        expect(updatedChannel.topic).toBe(channelProps.topic);
        expect(updatedChannel.description).toBe(channelProps.description);
        expect(updatedChannel.channelType).toBe(channelProps.channelType);
    });
});
//# sourceMappingURL=updateChannel.spec.js.map