import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateWalletItemArgs, WalletItemInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createWalletItem: WalletItem;
  };
  errors?: { message: string }[];
};

const createWalletItem = async (
  props: Partial<WalletItem>,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createWalletItem: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateWalletItemArgs = {
      input: props as unknown as WalletItemInput,
    };

    const response: ResponseDataType = await client.mutation.createWalletItem({
      $: args,
      ...modelFields.walletItem,
    });

    logger.debug('fsdata.createWalletItem response received.',
      { props, response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createWalletItem: errors received.',
        { props, errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.createWalletItem response:',
      { response: JSON.stringify(response) });

    return {
      object: response.data.createWalletItem
        ? new WalletItem(response.data.createWalletItem)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createWalletItem: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createWalletItem;
