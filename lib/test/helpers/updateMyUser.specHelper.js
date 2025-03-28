import { expect } from 'vitest';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';
export const updateMyUserSpecHelper = async (changes, client) => {
    logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser', { changes });
    logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser');
    const updateUserResponse = await client.operations.myUser.updateMyUser(changes, { cachePolicy: CachePolicy.network });
    logger.debug('BgServiceApiCheck.updateMyUser: received response from updateMyUser', { updateUserResponse });
    expect(updateUserResponse).toBeDefined();
    expect(updateUserResponse.error).toBeUndefined();
    expect(updateUserResponse.object).toBeDefined();
    verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    // Verifying the local user object:
    const myUserFromCache = await client.operations.myUser.findMyUser({
        cachePolicy: CachePolicy.cache,
    });
    expect(myUserFromCache?.id).toBe(changes.id);
    verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    // Verifying the remote user object:
    const myUserFromNetwork = await client.operations.myUser.findMyUser({
        cachePolicy: CachePolicy.network,
    });
    expect(myUserFromNetwork).toBeDefined();
    expect(myUserFromNetwork?.id).toBe(changes.id);
    verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    return true;
};
//# sourceMappingURL=updateMyUser.specHelper.js.map