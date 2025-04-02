import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationStartMySessionArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { startMySession: string }, errors?: { message: string }[] };

const startMySession = async (
  pushNotificationToken: string | null | undefined,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.startMySession: unavailable');
      return { error: 'unavailable' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    const deviceUuid = clientInfo.myUserDeviceUuid;
    const client = graffleClientStore.get();

    if (!clientInfo.isSignedIn) {
      logger.error('startMySession: unauthorized');
      return { error: 'unauthorized' };
    }

    logger.debug('fsdata.startMySession: sending');

    const args: MutationStartMySessionArgs = { deviceUuid, pushNotificationToken };
    const response: ResponseDataType = await client.mutation.startMySession({ $: args });

    logger.debug('fsdata.startMySession: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.startMySession: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (response.data.startMySession !== myUserId) {
      logger.error('fsdata.startMySession: incorrect response',
        { expected: myUserId, actual: response.data.startMySession });
      return { error: 'incorrect response' };
    }

    return {};
  } catch (error) {
    logger.error('fsdata.startMySession failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default startMySession;
