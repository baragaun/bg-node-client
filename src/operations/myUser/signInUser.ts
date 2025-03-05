import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';
import signInUserMutation from '../../fsdata/mutations/signInUser.js';
import { SignInUserInput, UserAuthResponse, UserIdentType } from '../../fsdata/gql/graphql.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import data from '../../helpers/data.js'

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

    // Making the user info available to the rest of the client:
    const config = data.config();
    config.myUserId = authResponse.userId;
    config.authToken = authResponse.authToken;
    data.setConfig(config);

    // Save the data to LocalStorage:
    saveUserInfo(authResponse.userId, undefined, authResponse.authToken);

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
