import db from '../../db/db.js';
import { AuthType, BgListenerTopic, ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';

const signUpUserMock = async (
  input: SignUpUserInput,
): Promise<QueryResult<SignInSignUpResponse>> => {
  if (!libData.isInitialized()) {
    logger.error('signUpUserMock: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.config().enableMockMode) {
    logger.error('signUpUserMock: not in mock mode');
    return { error: 'not-in-mock-mode' };
  }

  if (libData.clientInfoStore().isSignedIn) {
    logger.error('signUpUserMock: already signed in');
    return { error: 'offline' };
  }

  const myUserId = crypto.randomUUID().replaceAll('-', '');
  const authToken = `mock-${crypto.randomUUID().replaceAll('-', '')}`;
  const authTokenExpiresAt = new Date(Date.now() + 10 * 24 * 3600 * 1000).toISOString();

  try {
    const myUser: MyUser = {
      id: myUserId,
      adminNotes: input.adminNotes,
      // authType: input.authType,
      avatarUrl: input.avatarUrl,
      createdAt: input.createdAt,
      createdBy: input.createdBy,
      deletedAt: input.deletedAt,
      deletedBy: input.deletedBy,
      email: input.email,
      isEmailVerified: false,
      firstName: input.firstName,
      isTestUser: input.isTestUser,
      lastName: input.lastName,
      // offersHelp: input.offersHelp,
      optIntoNewsletter: input.optIntoNewsletter,
      spokenLanguagesTextIds: [],
      // passwordHash: input.password,
      phoneNumber: input.phoneNumber,
      isPhoneNumberVerified: false,
      roles: [],
      trustLevel: 1,
      // seeksHelp: input.seeksHelp,
      source: input.source,
      timezone: input.timezone,
      updatedAt: input.updatedAt,
      updatedBy: input.updatedBy,
      userHandle: input.userHandle,
      passwordHash: input.passwordHash,
      // passwordUpdatedAt: input.passwordUpdatedAt,
    };

    // await new Promise((resolve) => { setTimeout(resolve, 1000); });

    const insertResponse = await db.insert<MyUser>(myUser, ModelType.MyUser);

    if (insertResponse.error || !insertResponse.object) {
      logger.error('signUpUserMock: failed to insert mock user into db',
        { myUser, error: insertResponse.error });
      return { error: 'system-error' };
    }

    const signInSignUpResponse: SignInSignUpResponse = {
      userAuthResponse: {
        userId: myUserId,
        authToken,
        authTokenExpiresAt,
        authType: AuthType.token,
        firstName: input.firstName,
        lastName: input.lastName,
        foundUser: false,
        onboardingStage: 'complete',
      },
      myUser: insertResponse.object,
    };

    await libData.clientInfoStore().save({
      myUserId,
      signedOutUserId: null,
      authToken,
    });

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedIn === 'function'
      ) {
        const listenerResponse = (listener as MyUserListener).onSignedIn();
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('signUpUserMock: listener onSignedIn failed.',
              { error });
          });
        }
      }
    }

    return { object: signInSignUpResponse };
  } catch (error) {
    logger.error(error);
    return { error: (error as Error).message };
  }
};

export default signUpUserMock;
