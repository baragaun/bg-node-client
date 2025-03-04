import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';
import signUpUserMutation from '../../fsdata/mutations/signUpUser.js';
import { SignUpUserInput, UserAuthResponse } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';

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

export default signUpUser;
