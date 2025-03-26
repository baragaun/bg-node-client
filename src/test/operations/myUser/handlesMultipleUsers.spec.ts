import { describe, expect, test } from 'vitest';

import { CachePolicy, ModelType, UserIdentType } from '../../../enums.js';
import chance, {
  uniqueEmail,
  uniqueUserHandle,
} from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import findById from '../../../operations/findById.js';
import clientStore from '../../helpers/clientStore.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';

describe('operations.myUser.signInUser', () => {
  test('handles multiple users', async () => {
    const client = await clientStore.getTestClient();

    const propList = [
      {
        firstName: chance.first(),
        lastName: chance.last(),
        userHandle: uniqueUserHandle(),
        email: uniqueEmail(),
        password: chance.word(),
      },
      {
        firstName: chance.first(),
        lastName: chance.last(),
        userHandle: uniqueUserHandle(),
        email: uniqueEmail(),
        password: chance.word(),
      }
    ]

    for (const props of propList) {
      logger.debug('Test input:', { userHandle: props.userHandle, email: props.email, password: props.password });

      const { object: signUpUserAuthResponse } =
        await client.operations.myUser.signUpUser({
          userHandle: props.userHandle,
          firstName: props.firstName,
          lastName: props.lastName,
          email: props.email,
          password: props.password,
          isTestUser: true,
        });
      const myUserId = signUpUserAuthResponse.userAuthResponse.userId;

      const clientInfo1 = await client.clientInfoStore.load();
      expect(clientInfo1.myUserId).toBe(
        signUpUserAuthResponse.userAuthResponse.userId,
      );
      expect(clientInfo1.authToken).toBe(
        signUpUserAuthResponse.userAuthResponse.authToken,
      );

      logger.debug('Sign Up User', signUpUserAuthResponse);

      await client.operations.myUser.signMeOut();

      const clientInfo2 = await client.clientInfoStore.load();
      expect(clientInfo2.myUserId).toBeUndefined();
      expect(clientInfo2.authToken).toBeUndefined();

      const signInUserResponse = await client.operations.myUser.signInUser({
        ident: props.email,
        identType: UserIdentType.email,
        password: props.password,
      });

      expect(signInUserResponse.error).toBeUndefined();
      expect(signInUserResponse.object.userAuthResponse).toBeDefined();
      expect(signInUserResponse.object.userAuthResponse.userId).toBe(myUserId);
      expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
      expect(signInUserResponse.object.myUser).toBeDefined();
      expect(signInUserResponse.object.myUser.id).toBeDefined();

      const clientInfo3 = await client.clientInfoStore.load();
      expect(clientInfo3.myUserId).toBe(
        signInUserResponse.object.userAuthResponse.userId,
      );
      expect(clientInfo3.authToken).not.toBeNull();
      expect(clientInfo3.myUserId).toBe(
        signInUserResponse.object.userAuthResponse.userId,
      );
      expect(clientInfo3.authToken).toBe(
        signInUserResponse.object.userAuthResponse.authToken,
      );
      expect(client.operations.myUser.isSignedIn()).toBeTruthy();

      // Verifying the myUser object in the local cache/db:
      const findMyUserResult = await findById<MyUser>(
        signInUserResponse.object.userAuthResponse.userId,
        ModelType.MyUser,
        { cachePolicy: CachePolicy.cache },
      );

      expect(findMyUserResult.error).toBeUndefined();
      expect(findMyUserResult.object).toBeDefined();
      expect(findMyUserResult.object.id).toBe(myUserId);
      expect(findMyUserResult.object.userHandle).toBe(props.userHandle);
      expect(findMyUserResult.object.firstName).toBe(props.firstName);
      expect(findMyUserResult.object.lastName).toBe(props.lastName);
      expect(findMyUserResult.object.email).toBe(props.email);

      const clientInfo4 = await client.clientInfoStore.load();
      expect(clientInfo4.myUserId).toBe(myUserId);
      expect(clientInfo4.authToken).toBe(
        signInUserResponse.object.userAuthResponse.authToken,
      );

      // Signing Out:
      await client.operations.myUser.signMeOut();

      const clientInfo5 = await client.clientInfoStore.load();
      expect(clientInfo5.myUserId).toBeUndefined();
      expect(clientInfo5.authToken).toBeUndefined();
    }

    // Signing in as one of the two users in a semi random order:
    const sessionPropList = [
      propList[1],
      propList[0],
      propList[1],
      propList[1],
      propList[0],
    ];

    for (const props of sessionPropList) {
      const signInUserResponse = await client.operations.myUser.signInUser({
        ident: props.email,
        identType: UserIdentType.email,
        password: props.password,
      });

      const myUserId = signInUserResponse.object.userAuthResponse.userId;

      expect(signInUserResponse.error).toBeUndefined();
      expect(signInUserResponse.object.userAuthResponse).toBeDefined();
      expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
      expect(signInUserResponse.object.myUser).toBeDefined();
      expect(signInUserResponse.object.myUser.id).toBeDefined();

      const clientInfo3 = await client.clientInfoStore.load();
      expect(clientInfo3.myUserId).toBe(
        signInUserResponse.object.userAuthResponse.userId,
      );
      expect(clientInfo3.authToken).not.toBeNull();
      expect(clientInfo3.myUserId).toBe(
        signInUserResponse.object.userAuthResponse.userId,
      );
      expect(clientInfo3.authToken).toBe(
        signInUserResponse.object.userAuthResponse.authToken,
      );
      expect(client.operations.myUser.isSignedIn()).toBeTruthy();

      // Verifying the myUser object in the local cache/db:
      const findMyUserResult = await findById<MyUser>(
        signInUserResponse.object.userAuthResponse.userId,
        ModelType.MyUser,
        { cachePolicy: CachePolicy.cache },
      );

      expect(findMyUserResult.error).toBeUndefined();
      expect(findMyUserResult.object).toBeDefined();
      expect(findMyUserResult.object.id).toBe(myUserId);
      expect(findMyUserResult.object.userHandle).toBe(props.userHandle);
      expect(findMyUserResult.object.firstName).toBe(props.firstName);
      expect(findMyUserResult.object.lastName).toBe(props.lastName);
      expect(findMyUserResult.object.email).toBe(props.email);

      const clientInfo4 = await client.clientInfoStore.load();
      expect(clientInfo4.myUserId).toBe(myUserId);
      expect(clientInfo4.authToken).toBe(
        signInUserResponse.object.userAuthResponse.authToken,
      );

      // Signing Out:
      await client.operations.myUser.signMeOut();

      const clientInfo5 = await client.clientInfoStore.load();
      expect(clientInfo5.myUserId).toBeUndefined();
      expect(clientInfo5.authToken).toBeUndefined();
    }

    // Now we delete the users:
    for (const props of propList) {
      const signInUserResponse = await client.operations.myUser.signInUser({
        ident: props.email,
        identType: UserIdentType.email,
        password: props.password,
      });

      expect(signInUserResponse.error).toBeUndefined();
      expect(signInUserResponse.object.userAuthResponse).toBeDefined();
      expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
      expect(signInUserResponse.object.myUser).toBeDefined();
      expect(signInUserResponse.object.myUser.id).toBeDefined();

      const clientInfo = await client.clientInfoStore.load();
      expect(clientInfo.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
      expect(clientInfo.authToken).not.toBeNull();
      expect(clientInfo.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
      expect(clientInfo.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
      expect(client.operations.myUser.isSignedIn()).toBeTruthy();

      await deleteMyUser(client);
    }
  });
});
