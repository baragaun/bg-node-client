import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Wallet } from '../../../models/Wallet.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyWallet: Wallet;
  };
  errors?: { message: string }[];
};

const findMyWallet = async (): Promise<QueryResult<Wallet>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyWallet: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.query.findMyWallet({
      ...modelFields.wallet,
    });

    logger.debug('fsdata.findMyWallet received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findMyWallet: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code,
          errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (
      (response.errors && response.errors.length > 0) ||
      !response.data ||
      !response.data.findMyWallet
    ) {
      logger.error('fsdata.findMyWallet: errors',
        { errors: response.errors, headers: helpers.headers() });
      return { error: response.errors[0].message };
    }

    return {
      object: response.data.findMyWallet,
    };
  } catch (error) {
    logger.error('fsdata.findMyWallet: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyWallet;
