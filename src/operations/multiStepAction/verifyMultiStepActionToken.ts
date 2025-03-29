import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionRun } from '../../models/MultiStepActionRun.js';
import { SidMultiStepActionProgress } from '../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../types/QueryResult.js';

const verifyMultiStepActionToken = async (
  actionId: string,
  confirmToken: string,
  newPassword?: string,
): Promise<QueryResult<SidMultiStepActionProgress>> => {
  if (!libData.isInitialized()) {
    logger.error('verifyMultiStepActionToken: unavailable');
    return { error: 'unavailable' };
  }

  try {
    const run: MultiStepActionRun = libData.multiStepActionRun(actionId);

    if (run) {
      run.confirmToken = confirmToken;
    }

    logger.debug(
      'BgNodeClient.operations.multiStepAction.verifyMultiStepActionToken called.',
      {
        actionId,
        confirmToken,
        newPassword,
        run,
      },
    );

    const response = await fsdata.multiStepAction.verifyMultiStepActionToken(
      actionId,
      confirmToken,
      newPassword,
    );

    logger.debug(
      'BgNodeClient.operations.multiStepAction.verifyMultiStepActionToken response received.',
      { actionId, confirmToken, newPassword, response },
    );

    return response;
  } catch (error) {
    logger.error('verifyMultiStepActionToken: failed to verify token', { error });
    return { error: (error as Error).message };
  }
};

export default verifyMultiStepActionToken;
