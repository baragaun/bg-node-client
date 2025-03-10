import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, SidMultiStepActionInput } from '../../fsdata/gql/graphql.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';

const verifyEmail = async (
  userId: string,
  email: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('verifyEmail Input:', { userId, email });

    const input: SidMultiStepActionInput = {
      userId,
      actionType: MultiStepActionType.VerifyEmail,
      email,
    };
    const response = await fsdata.multiStepAction.createMultiStepAction(input);

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

export default verifyEmail;
