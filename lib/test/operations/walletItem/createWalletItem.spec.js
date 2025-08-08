import { afterEach, beforeAll, describe, test } from 'vitest';
import { BarcodeType, WalletItemSource } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { findGiftCardProductsSpecHelper, } from '../../helpers/giftCardProduct/findGiftCardProducts.specHelper.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemSpecHelper } from '../../helpers/walletItem/createWalletItem.specHelper.js';
describe.runIf(isFeatureEnabled('channels'))('operations.channel.createWalletItem', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('creates a wallet item with the given properties', async () => {
        const products = await findGiftCardProductsSpecHelper(undefined, { limit: 10 }, // not all products have denominations
        client);
        const productsWithDenominations = products.filter(p => p.denominations?.length > 0);
        const product = chance.pickone(productsWithDenominations);
        const price = product.denominations?.[0]?.amount || 10000;
        const props = {
            walletId: myUser.id,
            productId: product.id,
            brandId: product.brandId,
            productType: product.productType,
            name: product.name,
            price,
            initialBalance: price,
            balance: price,
            code: chance.string({ length: 10 }),
            hasBarcode: true,
            barcodeFormat: BarcodeType.TYPE_128,
            pin: chance.integer({ min: 1000, max: 9999 }).toString(),
            source: WalletItemSource.user,
            imageSourceFront: product.imageSourceFront,
            imageSourceBack: product.imageSourceBack,
            referenceUrl: chance.url(),
            termsEn: product.termsEn,
            termsUrl: product.termsUrl,
            instructionsEn: product.instructionsEn,
            instructionsUrl: product.instructionsUrl,
            sortIndex: 0,
            issuedAt: new Date().toISOString(),
        };
        await createWalletItemSpecHelper(props, client);
    });
    // test('should create a channel with the given properties (mock mode)', async () => {
    //   client.enableMockMode = true;
    //   const otherUser = await signMeUpSpecHelper(undefined, false, client);
    //   const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
    //   await signMeOut();
    //
    //   await signMeUpSpecHelper(undefined, false, client);
    //   const props = factories.walletItem.build({
    //     createdBy: client.clientInfoStore.myUserId,
    //     recipientId: otherUser.id,
    //   });
    //
    //   await createWalletItemSpecHelper(props, client);
    //
    //   await deleteMyUserSpecHelper(client);
    //
    //   // Cleanup for otherUser:
    //   await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    // });
}, { timeout: 10000 });
//# sourceMappingURL=createWalletItem.spec.js.map