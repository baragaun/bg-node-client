import { MutationType } from '../../enums.js';
import { SidMultiStepActionInput, SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import createMultiStepActionMutation from '../../fsdata/mutations/createMultiStepAction.js';
import { MutationResult } from '../../types/MutationResult.js';

const createMultiStepAction = async (
  input: SidMultiStepActionInput,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('createMultiStepAction Input:', input);
    const verifyEmailResponse = await createMultiStepActionMutation(input);

    return {
      operation: MutationType.create,
      object: verifyEmailResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createMultiStepAction;
