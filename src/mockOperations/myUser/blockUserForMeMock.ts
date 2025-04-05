import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { UserBlock } from '../../models/UserBlock.js';
import { QueryResult } from '../../types/QueryResult.js';

const blockUserForMeMock = async (
  userId: string,
  reasonTextId: string | undefined,
  notes: string | undefined,
): Promise<QueryResult<MyUser>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('blockUserForMeMock: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.config().enableMockMode) {
      logger.error('blockUserForMeMock: not in mock mode');
      return { error: 'not-in-mock-mode' };
    }

    const result = await db.findById<MyUser>(
      libData.clientInfoStore().myUserId,
      ModelType.MyUser,
    );

    if (result.error && !result.object) {
      return { error: 'not-found' };
    }

    const newUserBlock: UserBlock = {
      userId,
      reasonTextId: reasonTextId || '',
      notes: notes || '',
      createdAt: new Date().toISOString() as any,
    };

    return db.update<MyUser>(
      {
        id: libData.clientInfoStore().myUserId,
        userBlocks: result.object.userBlocks
          ? result.object.userBlocks.concat([newUserBlock])
          : [newUserBlock],
      },
      ModelType.MyUser,
    );
  } catch (error) {
    logger.error('blockUserForMeMock: blockUserForMeMock failed', error);
    return { error: 'system-error' };
  }
};

export default blockUserForMeMock;
