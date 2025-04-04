import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findAvailableUserHandleMock = async (startValue) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findAvailableUserHandleMock: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.config().enableMockMode) {
            logger.error('findAvailableUserHandleMock: not in mock mode');
            return { error: 'not-in-mock-mode' };
        }
        for (let i = 0; i < 100; i++) {
            const candidate = `${startValue}-${i}`;
            const result = await db.count({ selector: { userHandle: { $eq: candidate } } }, ModelType.MyUser);
            if (!result.error && result.object === 0) {
                return { object: candidate };
            }
        }
        return { object: crypto.randomUUID().replaceAll('-', '') };
    }
    catch (error) {
        logger.error('findAvailableUserHandleMock: findAvailableUserHandleMock failed', error);
        return { error: 'system-error' };
    }
};
export default findAvailableUserHandleMock;
//# sourceMappingURL=findAvailableUserHandleMock.js.map