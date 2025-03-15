import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const signInWithToken = async (
  userIdent: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  try {
    console.log('signInWithToken called.', { userIdent });

    const input: SidMultiStepActionInput = {
      userIdent,
      actionType: MultiStepActionType.TokenSignIn,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (!response || !response.actionId) {
      console.error('signInWithToken: action not found.');
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
    console.error(error);
    return {
      error: (error as Error).message,
    };
  }
};

export default signInWithToken;
