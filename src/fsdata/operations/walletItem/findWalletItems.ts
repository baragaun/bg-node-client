import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import { WalletItemListFilter } from '../../../models/WalletItemListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  WalletItemInput,
  WalletListFilter as WalletListFilterFromRemote,
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindWalletItemsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItems: WalletItem[];
  };
  errors?: { message: string }[];
};

const findWalletItems = async (
  filter: WalletItemListFilter,
  match: Partial<WalletItem>,
  options: FindObjectsOptions,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findWalletItems: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindWalletItemsArgs = {
      filter: (filter || null) as unknown as WalletListFilterFromRemote | null,
      match: match as unknown as InputMaybe<WalletItemInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findWalletItems({
      $: args,
      ...modelFields.walletItem,
    });

    logger.debug('fsdata.findWalletItems received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findWalletItems: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findWalletItems
        ? response.data.findWalletItems.map((item) => new WalletItem(item))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findWalletItems: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItems;
