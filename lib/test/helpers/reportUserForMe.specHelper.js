import { expect } from 'vitest';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';
export const reportUserForMeSpecHelper = async (userId, reasonTextId, notes, client) => {
    logger.debug('BgServiceApiCheck.reportUserForMe: calling API/reportUserForMe', { userId, reasonTextId, notes });
    const response = await client.operations.myUser.reportUserForMe(userId, reasonTextId, notes, { cachePolicy: CachePolicy.network });
    logger.debug('BgServiceApiCheck.reportUserForMe: received response from reportUserForMe', { updateUserResponse: response });
    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
};
//# sourceMappingURL=reportUserForMe.specHelper.js.map