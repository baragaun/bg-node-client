import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { WalletItemTransferListFilter } from '../../../models/WalletItemTransferListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindWalletItemTransfersArgs,
  WalletItemTransferInput,
  WalletItemTransferListFilter as WalletItemTransferListFilterFromNetwork,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItemTransfers: WalletItemTransfer[];
  };
  errors?: { message: string }[];
};

const findWalletItemTransfers = async (
  filter: WalletItemTransferListFilter,
  match: Partial<WalletItemTransfer>,
  options: FindObjectsOptions,
): Promise<QueryResult<WalletItemTransfer>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findWalletItemTransfers: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindWalletItemTransfersArgs = {
      filter: (filter || null) as unknown as WalletItemTransferListFilterFromNetwork | null,
      match: match as unknown as InputMaybe<WalletItemTransferInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findWalletItemTransfers({
      $: args,
      ...modelFields.walletItemTransfer,
    });

    logger.debug('fsdata.findWalletItemTransfers response:',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findWalletItemTransfers: errors received',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findWalletItemTransfers
        ? response.data.findWalletItemTransfers.map((transfer) => new WalletItemTransfer(transfer))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findWalletItemTransfers: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransfers;
