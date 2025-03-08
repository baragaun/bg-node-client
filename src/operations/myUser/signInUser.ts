import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { SignInUserInput } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MyUser } from '../../types/models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import findMyUser from './findMyUser.js';

const signInUser = async (input: SignInInput): Promise<MutationResult<SignInSignUpResponse>> => {
  try {
    const argInput: SignInUserInput = input;

    console.log('SignInUser Input:', input);

    const userAuthResponse = await fsdata.myUser.signInUser(argInput);
    let myUser: MyUser | null = null;

    if (userAuthResponse.userId) {
      // Making the user info available to the rest of the client:
      const config = data.config();
      config.myUserId = userAuthResponse.userId;
      config.authToken = userAuthResponse.authToken;
      data.setConfig(config);

      // Save the data to LocalStorage:
      saveUserInfo({
        myUserId: userAuthResponse.userId,
        myUserIdSignedOut: null,
        authToken: userAuthResponse.authToken,
      });

      myUser = await findMyUser({ cachePolicy: CachePolicy.network });
    }

    return {
      operation: MutationType.create,
      object: { userAuthResponse, myUser },
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
