import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const signInWithToken = async (
  userIdent: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  if (!libData.isInitialized()) {
    logger.error('signInWithToken: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('signInWithToken: offline');
    return { error: 'offline' };
  }

  try {
    logger.debug('signInWithToken called.', { userIdent });

    const input: SidMultiStepActionInput = {
      userIdent,
      actionType: MultiStepActionType.TokenSignIn,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (response.error || !response.object || !response.object.actionId) {
      logger.error('signInWithToken: action not found.', { response });
      return response;
    }

    return getMultiStepActionProgress(
      response.object.actionId,
      undefined,
      queryOptions,
    );
  } catch (error) {
    logger.error(error);
    return { error: (error as Error).message };
  }
};

export default signInWithToken;
