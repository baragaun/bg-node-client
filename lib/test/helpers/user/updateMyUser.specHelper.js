import { expect } from 'vitest';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const updateMyUserSpecHelper = async (changes, client) => {
    logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser', { changes });
    logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser');
    const updateUserResponse = await client.operations.myUser.updateMyUser(changes);
    logger.debug('BgServiceApiCheck.updateMyUser: received response from updateMyUser', { updateUserResponse });
    expect(updateUserResponse).toBeTruthy();
    expect(updateUserResponse.error).toBeUndefined();
    expect(updateUserResponse.object).toBeTruthy();
    verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    // Verifying the local user object:
    const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
        cachePolicy: CachePolicy.cache,
    });
    if (findMyUserFromCacheResult.error || !findMyUserFromCacheResult.object) {
        logger.error('BgServiceApiCheck.updateMyUser: failed to find my user from cache', { findMyUserFromCacheResult });
        return false; // Indicate failure
    }
    const myUserFromCache = findMyUserFromCacheResult.object;
    expect(myUserFromCache?.id).toBe(changes.id);
    verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    if (!client.isInMockMode) {
        // Verifying the remote user object:
        const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.network,
        });
        expect(findMyUserFromNetworkResult).toBeTruthy();
        expect(findMyUserFromNetworkResult.error).toBeUndefined();
        expect(findMyUserFromNetworkResult.object?.id).toBe(changes.id);
        verifyUserPropsSpecHelper(updateUserResponse.object, changes);
    }
    return true;
};
//# sourceMappingURL=updateMyUser.specHelper.js.map