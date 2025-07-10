import findMyUser from './findMyUser.js';
import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { IsInTargetStateFunc, QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationBlockUserForMeArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = { data: { blockUserForMe: string }, errors?: { message: string }[] };

const blockUserForMe = async (
  userId: string,
  reasonTextId: string | undefined,
  notes: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.blockUserForMe: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    if (!queryOptions) {
      queryOptions = defaultQueryOptionsForMutations;
    }

    const findMyUserResponse = await findMyUser();
    const myUser = findMyUserResponse.object;

    if (findMyUserResponse.error || !myUser) {
      logger.error('blockUserForMe: failed to find my user.', { findMyUserResponse });
      return findMyUserResponse;
    }
    const oldUserBlockCount = myUser.userBlocks
      ? myUser.userBlocks.length
      : 0;

    const args: MutationBlockUserForMeArgs = {
      userId,
      reasonTextId,
      notes,
    };
    logger.debug('fsdata.blockUserForMe: sending.', { args });

    const response: ResponseDataType = await client.mutation.blockUserForMe({ $: args });

    logger.debug('fsdata.blockUserForMe: response received.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.blockUserForMe: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.blockUserForMe: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.blockUserForMe) {
      logger.error('fsdata.blockUserForMe: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    queryOptions.polling = {
      enabled: true,
      isInTargetStateFunc: ((updatedUser: MyUser): boolean =>
        updatedUser.userBlocks && updatedUser.userBlocks.length > oldUserBlockCount) as IsInTargetStateFunc,
      oldUpdatedAt: myUser.updatedAt,
    };

    logger.debug('fsdata.blockUserForMe: starting polling.');
    const pollingResult = await pollForUpdatedObject<MyUser>(
      myUser.id,
      ModelType.MyUser,
      queryOptions,
    );
    logger.debug('fsdata.blockUserForMe: polling finished.', { pollingResult });

    return pollingResult;
  } catch (error) {
    logger.error('fsdata.blockUserForMe: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default blockUserForMe;
