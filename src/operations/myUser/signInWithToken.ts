import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const signInWithToken = async (
  userIdent: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MutationResult<MultiStepActionProgressResult>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

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
        operation: MutationType.update,
        error: 'system-error',
      };
    }

    const responseFromProgress = await getMultiStepActionProgress(
      response.actionId,
      undefined,
      queryOptions,
    );

    return {
      operation: MutationType.update,
      error: responseFromProgress.error,
      object: responseFromProgress.object,
    };
  } catch (error) {
    logger.error(error);
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default signInWithToken;
