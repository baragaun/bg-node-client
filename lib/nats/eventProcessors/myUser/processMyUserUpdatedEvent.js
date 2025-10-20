import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const processMyUserUpdatedEvent = async (payload) => {
    const updatedMyUser = payload.data?.myUser;
    if (!updatedMyUser) {
        return;
    }
    const result = await db.update(updatedMyUser, ModelType.MyUser);
    if (!result || result.error) {
        logger.error('nats.processMyUserUpdatedEvent: Failed to update MyUser in local DB.', { result, updatedMyUser });
    }
};
//# sourceMappingURL=processMyUserUpdatedEvent.js.map