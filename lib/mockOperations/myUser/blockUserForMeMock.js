import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const blockUserForMeMock = async (userId, reasonTextId, notes) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('blockUserForMeMock: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.config().enableMockMode) {
            logger.error('blockUserForMeMock: not in mock mode');
            return { error: 'not-in-mock-mode' };
        }
        const result = await db.findById(libData.clientInfoStore().myUserId, ModelType.MyUser);
        if (result.error && !result.object) {
            return { error: 'not-found' };
        }
        const newUserBlock = {
            userId,
            reasonTextId: reasonTextId || '',
            notes: notes || '',
            createdAt: new Date().toISOString(),
        };
        return db.update({
            id: libData.clientInfoStore().myUserId,
            userBlocks: result.object.userBlocks
                ? result.object.userBlocks.concat([newUserBlock])
                : [newUserBlock],
        }, ModelType.MyUser);
    }
    catch (error) {
        logger.error('blockUserForMeMock: blockUserForMeMock failed', error);
        return { error: 'system-error' };
    }
};
export default blockUserForMeMock;
//# sourceMappingURL=blockUserForMeMock.js.map