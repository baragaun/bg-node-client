import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { verifyMyPassword: boolean }, errors?: { message: string }[] };

const verifyMyPassword = async (
  password: string,
): Promise<QueryResult<boolean>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.verifyMyPassword: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const args = { password };

    logger.debug('fsdata.verifyMyPassword: sending.', { args });

    const response: ResponseDataType = await client.query.verifyMyPassword({ $: args });

    logger.debug('fsdata.verifyMyPassword: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.verifyMyPassword: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    return { object: response.data.verifyMyPassword };

  } catch (error) {
    logger.error('fsdata.verifyMyPassword: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default verifyMyPassword;
