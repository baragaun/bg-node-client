import db from '../../db/db.js';
import { SignUpUserInput } from '../../fsdata/gql/graphql.js';
import signUpUserMutation from '../../fsdata/mutations/signUpUser.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpInput } from '../../types/SignUpInput.js';
import { CachePolicy, MutationType } from '../../types/enums.js';
import { MyUser } from '../../types/models/MyUser.js';
import findMyUser from './findMyUser.js';

const signUpUser = async (input: SignUpInput): Promise<MutationResult<SignInSignUpResponse>> => {
  try {
    const argInput: SignUpUserInput = input;

    const userAuthResponse = await signUpUserMutation(argInput);
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

      // Getting my user to save it into the cache:
      myUser = await findMyUser({ cachePolicy: CachePolicy.network });

      // Save into the local database:
      const saveResult = await db.insert<MyUser>(myUser);
      myUser = saveResult.object;
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

export default signUpUser;
