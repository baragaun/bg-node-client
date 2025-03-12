import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { MultiStepActionRun } from '../../types/index.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';

const verifyMultiStepActionToken = async (
  actionId: string,
  confirmToken: string,
  newPassword?: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  console.log('verifyMultiStepActionToken Input:', { actionId, newPassword, confirmToken });

  try {
    const run: MultiStepActionRun = data.multiStepActionRun(actionId);

    if (run) {
      run.confirmToken = confirmToken;
    }

    const response = await fsdata.multiStepAction.verifyMultiStepActionToken(
      actionId,
      confirmToken,
      newPassword,
    );

    return {
      operation: MutationType.create,
      object: response,
    };
  } catch (error) {
    console.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default verifyMultiStepActionToken;
