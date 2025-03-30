import findMyUser from './findMyUser.js';
import { BgListenerTopic, CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';

const signUpUser = async (
  input: SignUpUserInput,
): Promise<QueryResult<SignInSignUpResponse>> => {
  if (!libData.isInitialized()) {
    logger.error('signUpUser: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('signUpUser: offline');
    return { error: 'offline' };
  }

  try {
    const signUpUserResult = await fsdata.myUser.signUpUser(input);

    if (signUpUserResult.error || !signUpUserResult.object) {
      logger.error('signUpUser: failed to sign up user', { input, error: signUpUserResult.error });
      return { error: signUpUserResult.error };
    }

    const userAuthResponse = signUpUserResult.object;
    let myUser: MyUser | null = null;

    if (!userAuthResponse.userId) {
      logger.error('signUpUser: userId is missing', { userAuthResponse, input });

      return { error: 'system-error' };
    }

    await libData.clientInfoStore().save({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    // Getting my user to save it into the cache:
    const findMyUserResult = await findMyUser({
      cachePolicy: CachePolicy.network,
      polling: { enabled: false },
    });

    if (findMyUserResult.error || !findMyUserResult.object) {
      logger.error('signUpUser: failed to find my user after sign up',
        { findMyUserResult, userAuthResponse });
      return { error: 'system-error' };
    }

    myUser = findMyUserResult.object;

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedIn === 'function'
      ) {
        const listenerResponse = (listener as MyUserListener).onSignedIn();
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('signUpUser: listener onSignedIn failed.',
              { error });
          });
        }
      }
    }

    return { object: { userAuthResponse, myUser } };
  } catch (error) {
    logger.error(error);
    return { error: (error as Error).message };
  }
};

export default signUpUser;
