import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationDeleteMyUserV2Args  } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { deleteMyUser: string }, errors?: { message: string }[] };

const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.deleteMyUser: unavailable');
      return { error: 'unavailable' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;

    const client = graffleClientStore.get();

    logger.debug('fsdata.deleteMyUser: sending');

    const args: MutationDeleteMyUserV2Args = { cause, description, deletePhysically };
    const response: ResponseDataType = await client.mutation.deleteMyUserV2({ $: args });

    logger.debug('fsdata.deleteMyUser: response received.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.deleteMyUser: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.deleteMyUser: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (response.data.deleteMyUser !== myUserId) {
      logger.error('fsdata.deleteMyUser: incorrect response',
        { expected: myUserId, actual: response.data.deleteMyUser });
      return { error: 'incorrect response' };
    }

    return {};
  } catch (error) {
    logger.error('fsdata.deleteMyUser failed.',
      { error: error.messages, stack: error.stack, headers: helpers.headers() });
    return {};
  }
};

export default deleteMyUser;
