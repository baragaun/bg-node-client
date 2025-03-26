import { expect } from 'vitest';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';
export const signMeOutSpeckHelper = async (client) => {
    logger.debug('BgServiceApiCheck.signMeOut: calling API/signMeOut');
    await client.operations.myUser.signMeOut();
    const clientInfo = await client?.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeDefined();
    expect(clientInfo.authToken).toBeDefined();
    expect(clientInfo.myUserDeviceUuid).toBeDefined();
    try {
        // Verifying the local user object:
        const myUserFromCache = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        expect(myUserFromCache).toBeUndefined();
    }
    catch {
        // ignore
    }
    expect(client.isSignedIn).toBeFalsy();
    expect(client.myUserId).toBeUndefined();
    return true;
};
//# sourceMappingURL=signMeOut.speckHelper.js.map