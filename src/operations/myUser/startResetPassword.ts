import { MutationType } from '../../enums.js';
import { SidMultiStepActionProgress, UserIdentInput } from '../../fsdata/gql/graphql.js';
import startPasswordResetMutation from '../../fsdata/mutations/startResetPassword.js';
import { MutationResult } from '../../types/MutationResult.js';

const startPasswordReset = async (input: UserIdentInput): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('startPasswordReset Input:', input);
    const verifyEmailResponse = await startPasswordResetMutation(input);

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

export default startPasswordReset;
