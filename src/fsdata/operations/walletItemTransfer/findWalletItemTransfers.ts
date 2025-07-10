import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromRemote,
  InputMaybe,
  QueryFindWalletItemTransfersArgs,
  WalletItemTransferInput,
  WalletItemTransferListFilter,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findWalletItemTransfers: WalletItemTransfer[] | null;
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
      filter: (filter || null) as unknown as WalletItemTransferListFilter | null,
      match: match as unknown as InputMaybe<WalletItemTransferInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromRemote>,
    };

    const response: ResponseDataType = await client.query.findWalletItemTransfers({
      $: args,
      id: true,
      ...modelFields.walletItemTransfer,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findWalletItemTransfers: errors received',
        { errorCode: (response.errors[0] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.findWalletItemTransfers response:', { response });

    return {
      objects: response.data.findWalletItemTransfers
        ? response.data.findWalletItemTransfers.map((i) => new WalletItemTransfer(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findWalletItemTransfers: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransfers;
