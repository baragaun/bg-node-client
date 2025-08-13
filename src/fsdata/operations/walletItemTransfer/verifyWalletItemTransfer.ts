import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  QueryVerifyWalletItemTransferArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    verifyWalletItemTransfer: WalletItem;
  };
  errors?: { message: string }[];
};

const verifyWalletItemTransfer = async (
  transferSecret: string,
  walletItemId: string,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.verifyWalletItemTransfer: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryVerifyWalletItemTransferArgs = {
      transferSecret,
      walletItemId,
    };

    const response: ResponseDataType = await client.query.verifyWalletItemTransfer({
      $: args,
      ...modelFields.walletItem,
    });

    logger.debug('fsdata.verifyWalletItemTransfer response:',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.verifyWalletItemTransfer: errors received',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      object: response.data.verifyWalletItemTransfer
        ? new WalletItem(response.data.verifyWalletItemTransfer)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.verifyWalletItemTransfer: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default verifyWalletItemTransfer;
