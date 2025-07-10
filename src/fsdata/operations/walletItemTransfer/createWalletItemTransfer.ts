import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { WalletItemTransferInput } from '../../../types/WalletItemTransferInput.js';
import { MutationCreateWalletItemTransferArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createWalletItemTransfer: WalletItemTransfer;
  };
  errors?: { message: string }[];
};

const createWalletItemTransfer = async (
  props: WalletItemTransferInput,
): Promise<QueryResult<WalletItemTransfer>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createWalletItemTransfer: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateWalletItemTransferArgs = {
      input: props as unknown as WalletItemTransferInput,
    };

    const response: ResponseDataType = await client.mutation.createWalletItemTransfer({
      $: args,
      ...modelFields.walletItemTransfer,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createWalletItemTransfer: errors received',
        { errorCode: (response.errors[0] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.createWalletItemTransfer response:', { response });

    return {
      object: response.data.createWalletItemTransfer
        ? new WalletItemTransfer(response.data.createWalletItemTransfer)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createWalletItemTransfer: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createWalletItemTransfer;
