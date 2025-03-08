import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';

const startVerifyEmail = async (
  input: string,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('startVerifyEmail Input:', input);
    const verifyEmailResponse = await fsdata.myUser.startVerifyEmail(input);

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

export default startVerifyEmail;
