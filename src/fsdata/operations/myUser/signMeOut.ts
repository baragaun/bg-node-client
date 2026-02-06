import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { signMeOut: string }, error?: string };

const signMeOut = async (): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.signMeOut: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    logger.debug('fsdata.signMeOut: sending');

    const response: ResponseDataType = await client.mutation.signMeOut();

    logger.debug('fsdata.signMeOut: response received.',
      { response: JSON.stringify(response) });

    if (response.error) {
      logger.error('fsdata.signMeOut: errors received.',
        { errorCode: (response.error as any)?.extensions?.code, errors: JSON.stringify(response.error) });
      return { error: response.error };
    }

    return {};
  } catch (error) {
    logger.error('fsdata.signMeOut: mutation error:', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default signMeOut;
