import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const resetMyPassword = async (
  userIdent: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  if (!libData.isInitialized()) {
    logger.error('resetMyPassword: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('resetMyPassword: offline');
    return { error: 'offline' };
  }

  try {
    logger.debug('resetMyPassword called.', { userIdent });

    const input: SidMultiStepActionInput = {
      userIdent,
      actionType: MultiStepActionType.ResetPassword,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (response.error || !response || !response.object.actionId) {
      logger.error('resetMyPassword: action not found.', { response });
      return { error: response.error };
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

export default resetMyPassword;
