import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';
import signUpUserMutation from '../../fsdata/mutations/signUpUser.js';
import { SignUpUserInput, UserAuthResponse } from '../../fsdata/gql/graphql.js';

const signUpUser = async (
  userHandle: string,
  email?: string,
  password?: string,
): Promise<MutationResult<UserAuthResponse>> => {
  try {
    const input: SignUpUserInput = {
      userHandle,
      email,
      password,
    };

    const authResponse = await signUpUserMutation(input);

    return {
      operation: MutationType.create,
      object: authResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default signUpUser;
