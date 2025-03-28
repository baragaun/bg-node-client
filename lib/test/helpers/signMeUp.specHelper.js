import { expect } from 'vitest';
import { getTestUserPropsSpecHelper } from './getTestUserProps.specHelper.js';
import { signMeOutSpecHelper } from './signMeOut.specHelper.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { CachePolicy } from '../../enums.js';
import chance from '../../helpers/chance.js';
import logger from '../../helpers/logger.js';
import userFactory from '../factories/user.js';
export const signMeUpSpecHelper = async (props, signOut, client) => {
    logger.debug('BgServiceApiCheck.createMyUser: calling API/signUpUser', { props });
    props = userFactory.build(props);
    const testUserProps = getTestUserPropsSpecHelper(props);
    if (!testUserProps.password) {
        testUserProps.password = chance.string({ length: 8 });
    }
    const input = {
        firstName: props.firstName,
        lastName: props.lastName,
        userHandle: props.userHandle,
        email: props.email,
        password: testUserProps.password,
        source: props.source,
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
    if (signOut) {
        await signMeOutSpecHelper(client);
    }
    return myUser;
};
//# sourceMappingURL=signMeUp.specHelper.js.map