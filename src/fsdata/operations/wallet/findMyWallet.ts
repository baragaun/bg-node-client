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
  error?: string;
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

    if (response.error) {
      logger.error('fsdata.findMyWallet: errors received.',
        { errorCode: (response.error as any)?.extensions?.code,
          errors: JSON.stringify(response.error) });

      return { error: response.error };
    }

    if (!response.data || !response.data.findMyWallet) {
      logger.error('fsdata.findMyWallet: errors',
        { errors: response.error, headers: helpers.headers() });
      return { error: response.error };
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
