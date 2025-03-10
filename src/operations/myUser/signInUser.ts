import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';

const signInUser = async (input: SignInInput): Promise<MutationResult<SignInSignUpResponse>> => {
  try {
    const userAuthResponse = await fsdata.myUser.signInUser(input);

    if (!userAuthResponse.userId) {
      console.error('signInUser: no userId in response.');
      return {
        operation: MutationType.create,
        error: 'system error',
      };
    }

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

    // Fetching a fresh copy of the user:
    const myUser = await findMyUser({ cachePolicy: CachePolicy.network });

    return {
      operation: MutationType.create,
      object: { userAuthResponse, myUser },
    };
  } catch (error) {
    console.error('signInUser failed.', error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default signInUser;
