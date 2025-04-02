import db from '../../db/db.js';
import { ModelType, UserIdentType as UserIdentTypeFromClient } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { QueryResult } from '../../types/QueryResult.js';

const isUserIdentAvailableMock = async (
  userIdent: string,
  _identType: UserIdentTypeFromClient,
): Promise<QueryResult<boolean>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('isUserIdentAvailableMock: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.config().enableMockMode) {
      logger.error('isUserIdentAvailableMock: offline');
      return { error: 'offline' };
    }

    const result = await db.count<MyUser>(
      {
        selector: {
          $or: [
            { userHandle: { $eq: userIdent } },
            { email: { $eq: userIdent } },
          ],
        },
      },
      ModelType.MyUser,
    );

    if (!result.error) {
      return { error: result.error };
    }

    return { object: result.object < 1 };
  } catch (error) {
    logger.error('isUserIdentAvailableMock: isUserIdentAvailableMock failed', error);
    return { error: (error as Error).message };
  }
};

export default isUserIdentAvailableMock;
