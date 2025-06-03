import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
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
        expect(Array.isArray(giftCardResponse.objects)).toBe(true);
        expect(giftCardResponse.objects.length).toBeGreaterThan(0);
        giftCardResponse.objects.forEach((object) => {
            expect(object).toHaveProperty('id');
            expect(object).toHaveProperty('name');
            expect(object).toHaveProperty('price');
        });
    });
}, { timeout: 60000 });
//# sourceMappingURL=findGiftCardProducts.spec.js.map