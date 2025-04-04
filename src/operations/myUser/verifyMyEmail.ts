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

const verifyMyEmail = async (
  email: string,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('verifyMyEmail: unavailable.');
      return { error: 'unavailable' };
    }

    if (libData.isOffline() && !libData.config().enableMockMode) {
      logger.error('verifyMyEmail: offline');
      return { error: 'offline' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;

    logger.debug('verifyEmail Input:', { email });

    const input: SidMultiStepActionInput = {
      userId: clientInfo.myUserId,
      actionType: MultiStepActionType.VerifyEmail,
      email,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

    if (response.error || !response || !response.object.actionId) {
      logger.error('verifyMyEmail: action not found.');
      return response;
    }

    return getMultiStepActionProgress(
      response.object.actionId,
      undefined,
      queryOptions,
    );
  } catch (error) {
    logger.error('verifyMyEmail: error.', { error });
    return { error: (error as Error).message };
  }
};

export default verifyMyEmail;
