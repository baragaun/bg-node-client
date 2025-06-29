import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { GiftCardProduct } from '../../../models/GiftCardProduct.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';

export const findGiftCardProductsSpecHelper = async (
  props: Partial<ShoppingCartItem> | undefined,
  options: FindObjectsOptions,
  client: BgNodeClient,
): Promise<GiftCardProduct[]> => {
  logger.debug('BgServiceApiCheck.findGiftCardProductsSpecHelper: calling API/findGiftCardProducts',
    { props, options });

  if (!options) {
    options = { limit: 10 };
  }

  if (!options.limit || isNaN(options.limit) || options.limit <= 0) {
    options.limit = 10;
  }

  const productResponse = await client.operations.giftCardProduct.findGiftCardProducts(
    undefined,
    undefined,
    undefined,
    options || { limit: 10 },
    { cachePolicy: CachePolicy.network },
  );

  expect(productResponse.error).toBeUndefined();
  expect(productResponse.objects.length).toEqual(options.limit);

  return productResponse.objects;
};

