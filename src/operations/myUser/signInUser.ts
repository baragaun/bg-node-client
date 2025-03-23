import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MutationResult } from '../../types/MutationResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';

const signInUser = async (
  input: SignInInput,
): Promise<MutationResult<SignInSignUpResponse>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  try {
    const userAuthResponse = await fsdata.myUser.signInUser(input);

    if (!userAuthResponse.userId) {
      logger.error('signInUser: no userId in response.', {
        userAuthResponse,
        input,
      });
      return {
        operation: MutationType.create,
        error: 'system error',
      };
    }

    // Making the user info available to the rest of the client:
    // Save the data to LocalStorage:
    await clientInfoStore.persist({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    // Fetching a fresh copy of the user:
    const myUser = await findMyUser({
      cachePolicy: CachePolicy.network,
      polling: { enabled: false },
    });

    return {
      operation: MutationType.create,
      object: { userAuthResponse, myUser },
    };
  } catch (error) {
    logger.error('signInUser failed.', error);
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default signInUser;
