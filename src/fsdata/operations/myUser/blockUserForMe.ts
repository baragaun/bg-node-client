import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import findMyUser from './findMyUser.js';
import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { IsInTargetStateFunc, QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationBlockUserForMeArgs } from '../../gql/graphql.js';
import gql from '../../gql/mutations/blockUserForMe.graphql.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type BlockUserForMeResponse = { blockUserForMe: string };

// see: https://graffle.js.org/guides/topics/requests
const blockUserForMe = async (
  userId: string,
  reasonTextId: string | undefined,
  notes: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  if (!libData.isInitialized()) {
    logger.error('blockUserForMe: unavailable');
    return { error: 'unavailable' };
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const findMyUserResponse = await findMyUser();
    const myUser = findMyUserResponse.object;

    if (findMyUserResponse.error || !myUser) {
      logger.error('blockUserForMe: failed to find my user.', { findMyUserResponse });
      return findMyUserResponse;
    }
    const oldUserBlockCount = myUser.userBlocks
      ? myUser.userBlocks.length
      : 0;

    const client = Graffle.create().transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    });

    const document = parse(gql) as TypedQueryDocumentNode<
      BlockUserForMeResponse,
      MutationBlockUserForMeArgs
    >;

    const args: MutationBlockUserForMeArgs = {
      userId,
      reasonTextId,
      notes,
    }
    const response = await client
      .gql(document)
      .send(args);

    if (!response.blockUserForMe) {
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
    logger.error('fsdata.blockUserForMe: failed with error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default blockUserForMe;
