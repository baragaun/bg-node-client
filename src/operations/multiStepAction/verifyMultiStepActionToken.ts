import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { VerifyMultiStepActionTokenInput } from '../../types/models/VerifyMultiStepActionTokenInput.js';
import { MutationResult } from '../../types/MutationResult.js';

const verifyMultiStepActionToken = async (
  input: VerifyMultiStepActionTokenInput,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('verifyMultiStepActionToken Input:', input);

    const response = await fsdata.multiStepAction.verifyMultiStepActionToken(input);

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
