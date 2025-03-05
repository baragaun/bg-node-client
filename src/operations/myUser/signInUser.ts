import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';
import signInUserMutation from '../../fsdata/mutations/signInUser.js';
import { SignInUserInput, UserAuthResponse, UserIdentType } from '../../fsdata/gql/graphql.js';

const signInUser = async (
  ident: string,
  identType: UserIdentType,
  password?: string,
): Promise<MutationResult<UserAuthResponse>> => {
  try {
    const input: SignInUserInput = {
      ident,
      identType,
      password,
    };

    const authResponse = await signInUserMutation(input);

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

export default signInUser;
