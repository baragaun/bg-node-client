import db from '../../db/db.js';
import { AuthType, BgListenerTopic, ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { UserAuthResponse } from '../../types/UserAuthResponse.js';

const signInUserMock = async (
  input: SignInInput,
): Promise<QueryResult<SignInSignUpResponse>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('signInUserMock: unavailable');
      return { error: 'unavailable' };
    }

    if (libData.isOffline() && !libData.config().enableMockMode) {
      logger.error('signInUserMock: offline');
      return { error: 'offline' };
    }

    const findResult = await db.findOne<MyUser>(
      {
        selector: {
          $or: [
            { email: input.ident },
            { userHandle: input.ident },
          ],
        },
      },
      ModelType.MyUser,
    );

    if (findResult.error || !findResult.object) {
      return { error: findResult.error || 'not-found or' };
    }

    const myUser = findResult.object;
    const userAuthResponse: UserAuthResponse = {
      userId: myUser.id,
      firstName: myUser.firstName || '',
      lastName: myUser.lastName || '',
      authToken: `mock-${crypto.randomUUID().replaceAll('-', '')}`,
      authTokenExpiresAt: new Date(Date.now() + 10 * 24 * 3600 * 1000).toISOString(),
      authType: AuthType.token,
      foundUser: true,
      onboardingStage: '', // todo
    };

    // Making the user info available to the rest of the client:
    // Save the data to LocalStorage:
    await libData.clientInfoStore().save({
      myUserId: userAuthResponse.userId,
      signedOutUserId: null,
      authToken: userAuthResponse.authToken,
    });

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedIn === 'function'
      ) {
        const listenerResponse = (listener as MyUserListener).onSignedIn();
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('signInUserMock: listener onSignedIn failed.',
              { error });
          });
        }
      }
    }

    return { object: { userAuthResponse, myUser } };
  } catch (error) {
    logger.error('signInUserMock failed.', error);
    return { error: (error as Error).message };
  }
};

export default signInUserMock;
