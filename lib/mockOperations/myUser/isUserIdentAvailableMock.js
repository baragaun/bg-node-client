import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const isUserIdentAvailableMock = async (userIdent, _identType) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('isUserIdentAvailableMock: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.config().enableMockMode) {
            logger.error('isUserIdentAvailableMock: offline');
            return { error: 'offline' };
        }
        const result = await db.count({
            selector: {
                $or: [
                    { userHandle: { $eq: userIdent } },
                    { email: { $eq: userIdent } },
                ],
            },
        }, ModelType.MyUser);
        if (!result.error) {
            return { error: result.error };
        }
        return { object: result.object < 1 };
    }
    catch (error) {
        logger.error('isUserIdentAvailableMock: isUserIdentAvailableMock failed', error);
        return { error: error.message };
    }
};
export default isUserIdentAvailableMock;
//# sourceMappingURL=isUserIdentAvailableMock.js.map