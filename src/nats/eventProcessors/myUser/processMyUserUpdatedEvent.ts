import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { MyUserEventPayload } from '../../../types/eventPayloadTypes.js';

export const processMyUserUpdatedEvent = async (payload: MyUserEventPayload): Promise<void> => {
  const updatedMyUser = payload.data?.myUser;

  if (!updatedMyUser) {
    return;
  }

  const result = await db.update<MyUser>(updatedMyUser, ModelType.MyUser);

  if (!result || result.error) {
    logger.error('nats.processMyUserUpdatedEvent: Failed to update MyUser in local DB.',
      { result, updatedMyUser });
  }
};
