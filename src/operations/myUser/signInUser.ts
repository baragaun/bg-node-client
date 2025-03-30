import findMyUser from './findMyUser.js';
import { BgListenerTopic, CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';

const signInUser = async (
  input: SignInInput,
): Promise<QueryResult<SignInSignUpResponse>> => {
  if (!libData.isInitialized()) {
    logger.error('resetMyPassword: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('signInUser: offline');
    return { error: 'offline' };
  }

  try {
    const signInUserResponse = await fsdata.myUser.signInUser(input);
    const userAuthResponse = signInUserResponse.object;

    if (signInUserResponse.error || !userAuthResponse) {
      logger.error('signInUser: failed to sign in user',
        { input, error: signInUserResponse.error });
      return { error: signInUserResponse.error };
    }

    if (!userAuthResponse.userId) {
      logger.error('signInUser: no userId in response.', {
        userAuthResponse,
        input,
      });
      return { error: 'system-error' };
    }

    // Making the user info available to the rest of the client:
    // Save the data to LocalStorage:
    await libData.clientInfoStore().save({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    // Fetching a fresh copy of the user:
    const findMyUserResult = await findMyUser({
      cachePolicy: CachePolicy.network,
      polling: { enabled: false },
    });

    if (findMyUserResult.error || !findMyUserResult.object) {
      logger.error('signInUser: failed to find my user after sign in',
        { findMyUserResult, userAuthResponse });
      return { error: 'system-error' };
    }

    const myUser = findMyUserResult.object;

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedIn === 'function'
      ) {
        const listenerResponse = (listener as MyUserListener).onSignedIn();
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('signInUser: listener onSignedIn failed.',
              { error });
          });
        }
      }
    }

    return { object: { userAuthResponse, myUser } };
  } catch (error) {
    logger.error('signInUser failed.', error);
    return { error: (error as Error).message };
  }
};

export default signInUser;
