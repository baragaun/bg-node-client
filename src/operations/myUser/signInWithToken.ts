import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const signInWithToken = async (
  userIdent: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  try {
    logger.debug('signInWithToken called.', { userIdent });

    const input: SidMultiStepActionInput = {
      userIdent,
      actionType: MultiStepActionType.TokenSignIn,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (!response || !response.actionId) {
      logger.error('signInWithToken: action not found.');
      return {
        error: 'system-error',
      };
    }

    return getMultiStepActionProgress(
      response.actionId,
      undefined,
      queryOptions,
    );
  } catch (error) {
    logger.error(error);
    return {
      error: (error as Error).message,
    };
  }
};

export default signInWithToken;
