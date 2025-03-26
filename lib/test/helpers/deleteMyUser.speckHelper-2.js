import { expect } from 'vitest';
import logger from '../../helpers/logger.js';
export const deleteMyUser = async (client) => {
    logger.debug('BgServiceApiCheck.deleteMyUser: calling API/deleteMyUser', { userId: client.myUserId });
    const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined, true);
    logger.debug('BgServiceApiCheck.deleteMyUser: received response', { deleteMyUserResponse });
    expect(deleteMyUserResponse.error).toBeUndefined();
    return true;
};
//# sourceMappingURL=deleteMyUser.speckHelper-2.js.map