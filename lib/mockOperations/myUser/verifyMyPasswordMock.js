import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const verifyMyPasswordMock = async (password) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('verifyMyPasswordMock: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.config().enableMockMode) {
            logger.error('verifyMyPasswordMock: not in mock mode');
            return { error: 'not-in-mock-mode' };
        }
        const result = await db.findById(libData.clientInfoStore().myUserId, ModelType.MyUser);
        if (result.error && !result.object) {
            return { error: 'not-found' };
        }
        return { object: result.object?.passwordHash === password ? 'true' : 'false' }; // Mock password check
    }
    catch (error) {
        logger.error('verifyMyPasswordMock: verifyMyPasswordMock failed', error);
        return { error: 'system-error' };
    }
};
export default verifyMyPasswordMock;
//# sourceMappingURL=verifyMyPasswordMock.js.map