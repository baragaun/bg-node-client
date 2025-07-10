import { UserIdentType as UserIdentTypeFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { QueryIsUserIdentAvailableArgs, UserIdentType } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { isUserIdentAvailable: boolean }, errors?: { message: string }[] };

const isUserIdentAvailable = async (
  userIdent: string,
  identType: UserIdentTypeFromClient,
): Promise<QueryResult<boolean>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.isUserIdentAvailable: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryIsUserIdentAvailableArgs = {
      ident: userIdent,
      identType: identType as unknown as UserIdentType,
    };
    logger.debug('fsdata.isUserIdentAvailable: sending.', { args });

    const response: ResponseDataType = await client.query.isUserIdentAvailable({ $: args });

    logger.debug('fsdata.isUserIdentAvailable: response received.',
      { response: JSON.stringify(response) });

    if (response.errors) {
      logger.error('fsdata.isUserIdentAvailable: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (response.data.isUserIdentAvailable !== true && response.data.isUserIdentAvailable !== false) {
      logger.error('fsdata.isUserIdentAvailable: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    return { object: response.data.isUserIdentAvailable };
  } catch (error) {
    logger.error('fsdata.isUserIdentAvailable failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default isUserIdentAvailable;
