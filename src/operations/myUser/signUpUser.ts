import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { MyUser } from '../../types/models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';

const signUpUser = async (
  input: SignUpUserInput,
): Promise<MutationResult<SignInSignUpResponse>> => {
  try {
    const argInput: SignUpUserInput = input;

    const userAuthResponse = await fsdata.myUser.signUpUser(argInput);
    let myUser: MyUser | null = null;

    if (!userAuthResponse.userId) {
      console.error('signUpUser: userId is missing');
      return {
        operation: MutationType.create,
        error: 'UserId is missing',
      };
    }

    await clientInfoStore.save({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    // Getting my user to save it into the cache:
    myUser = await findMyUser({ cachePolicy: CachePolicy.network });

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
