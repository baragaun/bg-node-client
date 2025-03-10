import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, SidMultiStepActionInput } from '../../fsdata/gql/graphql.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';

const resetPassword = async (
  userIdent: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('resetPassword Input:', { userIdent });

    const input: SidMultiStepActionInput = {
      userIdent,
      actionType: MultiStepActionType.ResetPassword,
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

export default resetPassword;
