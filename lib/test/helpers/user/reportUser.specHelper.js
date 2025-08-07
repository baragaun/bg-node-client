import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
export const reportUserSpecHelper = async (userId, reasonTextId, notes, client) => {
    logger.debug('BgServiceApiCheck.reportUser: calling API/reportUser', { userId, reasonTextId, notes });
    const response = await client.operations.myUser.reportUserForMe(userId, reasonTextId, notes);
    logger.debug('BgServiceApiCheck.reportUser: received response from reportUser', { updateUserResponse: response });
    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    // todo: verify
};
//# sourceMappingURL=reportUser.specHelper.js.map