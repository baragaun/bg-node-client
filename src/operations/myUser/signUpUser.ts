import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../types/models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';

const signUpUser = async (
  input: SignUpUserInput,
): Promise<MutationResult<SignInSignUpResponse>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  try {
    const userAuthResponse = await fsdata.myUser.signUpUser(input);
    let myUser: MyUser | null = null;

    if (!userAuthResponse.userId) {
      logger.error('signUpUser: userId is missing', {
        userAuthResponse,
        input,
      });

      return {
        operation: MutationType.create,
        error: 'UserId is missing',
      };
    }

    await clientInfoStore.persist({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    // Getting my user to save it into the cache:
    myUser = await findMyUser({
      cachePolicy: CachePolicy.network,
      polling: { enabled: false },
    });

    return {
      operation: MutationType.create,
      object: { userAuthResponse, myUser },
    };
  } catch (error) {
    logger.error(error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default signUpUser;
