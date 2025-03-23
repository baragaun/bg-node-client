import fsdata from '../../fsdata/fsdata.js';
import {
  MultiStepActionType,
  SidMultiStepActionInput,
} from '../../fsdata/gql/graphql.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';

const verifyMyEmail = async (
  email: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();

  try {
    logger.debug('verifyEmail Input:', { email });

    const input: SidMultiStepActionInput = {
      userId: clientInfo.myUserId,
      actionType: MultiStepActionType.VerifyEmail,
      email,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (!response || !response.actionId) {
      logger.error('verifyMyEmail: action not found.');
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

export default verifyMyEmail;
