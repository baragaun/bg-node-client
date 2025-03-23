import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionRun } from '../../models/MultiStepActionRun.js';
import { SidMultiStepActionProgress } from '../../models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';

const verifyMultiStepActionToken = async (
  actionId: string,
  confirmToken: string,
  newPassword?: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
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

    return {
      operation: MutationType.create,
      object: response,
    };
  } catch (error) {
    logger.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default verifyMultiStepActionToken;
