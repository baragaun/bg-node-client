import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import { WalletItemListFilter } from '../../../models/WalletItemListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
// import {
//   WalletItemDirection,
//   FindObjectsOptions,
//   InputMaybe,
//   // QueryFindWalletItemsArgs,
// } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItems: WalletItem[] | null;
  };
  errors?: { message: string }[];
};

// todo: implement
const findWalletItems = async (
  _filter: WalletItemListFilter,
  _match: Partial<WalletItem>,
  _options: FindObjectsOptionsFromClient,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findWalletItems: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    // const args: QueryFindWalletItemsArgs = {
    //   userId,
    //   onlyUnseen,
    //   onlyPending,
    //   direction: direction as unknown as WalletItemDirection,
    //   options: options as unknown as InputMaybe<FindObjectsOptions>,
    // };

    const response: ResponseDataType = await client.query.findWalletItems({
      // $: args,
      id: true,
      ...modelFields.walletItem,
    });

    logger.debug('fsdata.findWalletItems response:', { response });

    return {
      objects: response.data.findWalletItems
        ? response.data.findWalletItems.map((i) => new WalletItem(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findWalletItems: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItems;
