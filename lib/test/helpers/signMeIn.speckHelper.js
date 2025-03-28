import { expect } from 'vitest';
import logger from '../../helpers/logger.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.speckHelper.js';
import { CachePolicy, UserIdentType } from '../../enums.js';
export const signMeInSpeckHelper = async (email, password, client) => {
    logger.debug('BgServiceApiCheck.signMeIn: calling API/signInUser');
    const signInUserResponse = await client.operations.myUser.signInUser({
        ident: email,
        identType: UserIdentType.email,
        password,
    });
    logger.debug('BgServiceApiCheck.signMeIn: received response', { signInUserResponse });
    expect(signInUserResponse).toBeDefined();
    expect(signInUserResponse.error).toBeUndefined();
    expect(signInUserResponse.object).toBeDefined();
    expect(signInUserResponse.object.userAuthResponse).toBeDefined();
    expect(signInUserResponse.object.userAuthResponse.userId).toBeDefined();
    expect(signInUserResponse.object.userAuthResponse.authToken).toBeDefined();
    expect(signInUserResponse.object.myUser.id).toBe(signInUserResponse.object?.userAuthResponse?.userId);
    expect(client.isSignedIn).toBeTruthy();
    expect(client.myUserId).toBe(signInUserResponse.object?.userAuthResponse?.userId);
    const clientInfo = await client?.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeDefined();
    expect(clientInfo.authToken).toBeDefined();
    expect(clientInfo.myUserDeviceUuid).toBeDefined();
    // Verifying the local user object:
    const myUserFromCache = await client.operations.myUser.findMyUser({
        cachePolicy: CachePolicy.cache,
    });
    verifyUserPropsSpecHelper(myUserFromCache, {
        id: signInUserResponse.object?.userAuthResponse?.userId,
        firstName: signInUserResponse.object?.userAuthResponse?.firstName,
        lastName: signInUserResponse.object?.userAuthResponse?.lastName,
        email,
    });
    return true;
};
//# sourceMappingURL=signMeIn.speckHelper.js.map