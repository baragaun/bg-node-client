import { expect } from 'vitest';
import { signMeOutSpecHelper } from './signMeOut.specHelper.js';
import { userPasswordSpecHelper } from './userPassword.specHelper.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { CachePolicy } from '../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle } from '../../helpers/chance.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
export const signMeUpSpecHelper = async (props, signOut, client) => {
    logger.debug('BgServiceApiCheck.createMyUser: calling API/signUpUser', { props });
    const password = userPasswordSpecHelper(props) || chance.string({ length: 8 });
    const input = {
        firstName: props?.firstName || chance.first(),
        lastName: props?.lastName || chance.last(),
        userHandle: props?.userHandle || uniqueUserHandle(),
        email: props?.email || uniqueEmail(libData.config()?.testEmailPrefix || 'test', libData.config()?.testEmailDomain || 'test.com'),
        password,
        source: props?.source || 'testtoken=666666',
        isTestUser: true,
    };
    const signUpUserAuthResponse = await client.operations.myUser.signUpUser(input);
    logger.debug('BgServiceApiCheck.signMeUp: received signUpUser response', { signUpUserAuthResponse });
    expect(signUpUserAuthResponse.error).toBeUndefined();
    const authResponse = signUpUserAuthResponse.object?.userAuthResponse;
    const myUserId = authResponse.userId;
    expect(authResponse).toBeDefined();
    expect(myUserId).toBeDefined();
    expect(authResponse.authToken).toBeDefined();
    const clientInfo1 = await client?.clientInfoStore.load();
    expect(clientInfo1.myUserId).toBeDefined();
    expect(clientInfo1.authToken).toBeDefined();
    expect(clientInfo1.myUserDeviceUuid).toBeDefined();
    const myUser = await client.operations.myUser.findMyUser({
        cachePolicy: CachePolicy.cache,
    });
    expect(myUser).toBeDefined();
    verifyUserPropsSpecHelper(myUser, {
        firstName: input.firstName,
        lastName: input.lastName,
        userHandle: input.userHandle,
        email: input.email,
        source: input.source,
    });
    if (!myUser.adminNotes) {
        myUser.adminNotes = JSON.stringify({ password });
    }
    if (signOut) {
        await signMeOutSpecHelper(client);
    }
    return myUser;
};
//# sourceMappingURL=signMeUp.specHelper.js.map