import { expect } from 'vitest';
import logger from '../../helpers/logger.js';
export const reportUserForMeSpecHelper = async (userId, reasonTextId, notes, client) => {
    logger.debug('BgServiceApiCheck.reportUserForMe: calling API/reportUserForMe', { userId, reasonTextId, notes });
    const response = await client.operations.myUser.reportUserForMe(userId, reasonTextId, notes);
    logger.debug('BgServiceApiCheck.reportUserForMe: received response from reportUserForMe', { updateUserResponse: response });
    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    // todo: verify
};
//# sourceMappingURL=reportUserForMe.specHelper.js.map