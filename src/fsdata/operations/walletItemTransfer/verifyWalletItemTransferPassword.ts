import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationVerifyWalletItemTransferPasswordArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    verifyWalletItemTransferPassword: boolean;
  };
  errors?: { message: string }[];
};

const verifyWalletItemTransferPassword = async (
  transferSlug: string,
  password: string,
): Promise<QueryResult<boolean>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.verifyWalletItemTransferPassword: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationVerifyWalletItemTransferPasswordArgs = {
      transferSlug,
      password,
    };

    const response: ResponseDataType = await client.mutation.verifyWalletItemTransferPassword({
      $: args,
    });

    logger.debug('fsdata.verifyWalletItemTransferPassword response received.',
      { transferSlug, response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.verifyWalletItemTransferPassword: errors received.',
        { transferSlug, errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return { object: response.data.verifyWalletItemTransferPassword };
  } catch (error) {
    logger.error('fsdata.verifyWalletItemTransferPassword: error.',
      { transferSlug, error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default verifyWalletItemTransferPassword;
