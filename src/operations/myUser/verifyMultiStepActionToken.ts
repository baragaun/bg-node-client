import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import {
  SidMultiStepActionProgress,
  VerifyMultiStepActionTokenInput,
} from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';

const verifyMultiStepActionToken = async (
  input: VerifyMultiStepActionTokenInput,
): Promise<MutationResult<SidMultiStepActionProgress>> => {
  try {
    console.log('verifyMultiStepActionToken Input:', input);
    const verifyMultiStepActionTokenResponse =
      await fsdata.myUser.verifyMultiStepActionToken(input);

    return {
      operation: MutationType.create,
      object: verifyMultiStepActionTokenResponse,
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
