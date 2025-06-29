import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.giftCardProduct.findGiftCardProducts', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('returns the gift card products', async () => {
        await signMeUpSpecHelper(undefined, false, client);
        const giftCardResponse = await client.operations.giftCardProduct.findGiftCardProducts(undefined, undefined, undefined, undefined, { cachePolicy: CachePolicy.network });
        expect(giftCardResponse.error).toBeUndefined();
        expect(giftCardResponse.objects.length).toBeGreaterThan(10);
    });
});
//# sourceMappingURL=findGiftCardProducts.spec.js.map