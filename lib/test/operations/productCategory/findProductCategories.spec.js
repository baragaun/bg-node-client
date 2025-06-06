import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.productCategory.findProductCategories', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('returns the product categories', async () => {
        await signMeUpSpecHelper(undefined, false, client);
        const categories = await client.operations.productCategory.findProductCategories(undefined, undefined, undefined, undefined, { cachePolicy: CachePolicy.network });
        expect(categories.error).toBeUndefined();
        expect(categories.objects.length).toBeGreaterThan(10);
    });
}, { timeout: 60000 });
//# sourceMappingURL=findProductCategories.spec.js.map