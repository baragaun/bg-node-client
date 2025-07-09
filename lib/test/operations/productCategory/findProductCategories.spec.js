import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe.runIf(isFeatureEnabled('marketplace'))('operations.productCategory.findProductCategories', () => {
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
});
//# sourceMappingURL=findProductCategories.spec.js.map