import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { endMySession: string }, errors?: { message: string }[] };

const endMySession = async (): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.endMySession: unavailable');
      return { error: 'unavailable' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;

    const client = graffleClientStore.get();

    logger.debug('fsdata.endMySession: sending');

    const response: ResponseDataType = await client.mutation.endMySession();

    logger.debug('fsdata.endMySession: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.endMySession: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (response.data.endMySession !== myUserId) {
      logger.error('fsdata.endMySession: incorrect response',
        { expected: myUserId, actual: response.data.endMySession });
      return { error: 'incorrect response' };
    }

    return {};
  } catch (error) {
    logger.error('fsdata.endMySession failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default endMySession;
