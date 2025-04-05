import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { QueryResult } from '../../types/QueryResult.js';

const unblockUserForMeMock = async (
  userId: string,
): Promise<QueryResult<MyUser>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('unblockUserForMeMock: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.config().enableMockMode) {
      logger.error('unblockUserForMeMock: not in mock mode');
      return { error: 'not-in-mock-mode' };
    }

    const result = await db.findById<MyUser>(
      libData.clientInfoStore().myUserId,
      ModelType.MyUser,
    );
    const myUser = result.object;

    if (result.error && !myUser) {
      return { error: 'not-found' };
    }

    if (!Array.isArray(myUser.userBlocks) || myUser.userBlocks.length < 1) {
      return { error: 'was-not-blocked' };
    }

    return db.update<MyUser>(
      {
        id: libData.clientInfoStore().myUserId,
        userBlocks: myUser.userBlocks.filter(b => b.userId !== userId),
      },
      ModelType.MyUser,
    );
  } catch (error) {
    logger.error('unblockUserForMeMock: unblockUserForMeMock failed', error);
    return { error: 'system-error' };
  }
};

export default unblockUserForMeMock;
