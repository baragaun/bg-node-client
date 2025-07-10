import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ContentStatus } from '../../../models/ContentStatus.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationStartMySessionV2Args } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { data: { startMySessionV2: ContentStatus }, errors?: { message: string }[] };

const startMySessionV2 = async (
  pushNotificationToken: string | null | undefined,
  returnContentStatus: boolean,
): Promise<QueryResult<ContentStatus>> => {
  try {

    if (!libData.isInitialized()) {
      logger.error('fsdata.startMySessionV2: unavailable');
      return { error: 'unavailable' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    const client = graffleClientStore.get();

    if (!clientInfo.isSignedIn) {
      logger.error('startMySessionV2: unauthorized');
      return { error: 'unauthorized' };
    }

    const args: MutationStartMySessionV2Args = {
      pushNotificationToken,
      returnContentStatus,
    };
    logger.debug('fsdata.startMySessionV2: sending', {
      $: args,
      optionsUpdatedAt: true,
      myUserUpdatedAt: true,
      myUserInboxUpdatedAt: true,
    });

    const response: ResponseDataType = await client.mutation.startMySessionV2({
      $: args,
      optionsUpdatedAt: true,
      myUserUpdatedAt: true,
      myUserInboxUpdatedAt: true,
    });

    logger.debug('fsdata.startMySessionV2: response received.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.startMySessionV2: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.startMySessionV2: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.startMySessionV2.optionsUpdatedAt) {
      logger.error('fsdata.startMySessionV2: incorrect response',
        { expected: myUserId, actual: response.data.startMySessionV2 });
      return { error: 'incorrect response' };
    }

    return { object: new ContentStatus(response.data.startMySessionV2) };
  } catch (error) {
    logger.error('fsdata.startMySessionV2 failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default startMySessionV2;
