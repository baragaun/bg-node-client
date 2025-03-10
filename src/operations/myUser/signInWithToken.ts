import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, SidMultiStepActionInput } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';

const signInWithToken = async (
  email: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('signInWithToken called:', email);

    const input: SidMultiStepActionInput = {
      actionType: MultiStepActionType.TokenSignIn,
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

export default signInWithToken;
