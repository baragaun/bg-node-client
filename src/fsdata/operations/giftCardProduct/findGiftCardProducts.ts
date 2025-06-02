import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { GiftCardProduct } from '../../../models/GiftCardProduct.js';
import { GiftCardProductListFilter as GiftCardListFilterFromClient } from '../../../models/GiftCardProductListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  GiftCardProductInput,
  GiftCardProductListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindGiftCardProductsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findGiftCardProducts: GiftCardProduct[] | null;
  };
  errors?: { message: string }[];
};

const findGiftCardProducts = async (
  filter: GiftCardListFilterFromClient | null | undefined,
  match: Partial<GiftCardProduct> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<GiftCardProduct>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findGiftCardProducts: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindGiftCardProductsArgs = {
      filter: (filter || null) as unknown as GiftCardProductListFilter | null,
      match: match as unknown as InputMaybe<GiftCardProductInput>,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findGiftCardProducts({
      $: args,
      ...modelFields.giftCardProduct,
    });

    logger.debug('fsdata.findGiftCardProducts response:', { response });

    return {
      objects: response.data.findGiftCardProducts
        ? response.data.findGiftCardProducts.map((giftCard) => new GiftCardProduct(giftCard))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findGiftCardProducts: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findGiftCardProducts;
