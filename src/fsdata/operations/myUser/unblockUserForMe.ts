import findMyUser from './findMyUser.js';
import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { IsInTargetStateFunc, QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationUnblockUserForMeArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = { data: { unblockUserForMe: string }, errors?: { message: string }[] };

const unblockUserForMe = async (
  userId: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.unblockUserForMe: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    if (!queryOptions) {
      queryOptions = defaultQueryOptionsForMutations;
    }

    const findMyUserResponse = await findMyUser();
    const myUser = findMyUserResponse.object;

    if (findMyUserResponse.error || !myUser) {
      logger.error('unblockUserForMe: failed to find my user.', { findMyUserResponse });
      return findMyUserResponse;
    }
    const oldUserBlockCount = myUser.userBlocks
      ? myUser.userBlocks.length
      : 0;

    const args: MutationUnblockUserForMeArgs = { userId };
    logger.debug('fsdata.unblockUserForMe: sending.', { args });

    const response: ResponseDataType = await client.mutation.unblockUserForMe({ $: args });

    logger.debug('fsdata.unblockUserForMe: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.unblockUserForMe: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.unblockUserForMe) {
      logger.error('fsdata.unblockUserForMe: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    queryOptions.polling = {
      enabled: true,
      isInTargetStateFunc: ((updatedUser: MyUser): boolean =>
        !updatedUser.userBlocks || updatedUser.userBlocks.length < oldUserBlockCount) as IsInTargetStateFunc,
      oldUpdatedAt: myUser.updatedAt,
    };

    logger.debug('fsdata.unblockUserForMe: starting polling.');
    const pollingResult = await pollForUpdatedObject<MyUser>(
      myUser.id,
      ModelType.MyUser,
      queryOptions,
    );
    logger.debug('fsdata.unblockUserForMe: polling finished.', { pollingResult });

    return pollingResult;
  } catch (error) {
    logger.error('fsdata.unblockUserForMe: failed with error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default unblockUserForMe;
