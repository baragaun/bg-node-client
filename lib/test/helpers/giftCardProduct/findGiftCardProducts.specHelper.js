import { expect } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const findGiftCardProductsSpecHelper = async (props, options, client) => {
    logger.debug('BgServiceApiCheck.findGiftCardProductsSpecHelper: calling API/findGiftCardProducts', { props, options });
    if (!options) {
        options = { limit: 10 };
    }
    if (!options.limit || isNaN(options.limit) || options.limit <= 0) {
        options.limit = 10;
    }
    const productResponse = await client.operations.giftCardProduct.findGiftCardProducts(undefined, undefined, undefined, options || { limit: 10 }, { cachePolicy: CachePolicy.network });
    expect(productResponse.error).toBeUndefined();
    expect(productResponse.objects.length).toEqual(options.limit);
    return productResponse.objects;
};
//# sourceMappingURL=findGiftCardProducts.specHelper.js.map