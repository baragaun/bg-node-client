import db from '../../db/db.js';
import { BgListenerTopic, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';

const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<QueryResult<void>> => {
  if (!libData.isInitialized()) {
    logger.error('deleteMyUser: unavailable');
    return { error: 'unavailable' };
  }

  const clientInfo = libData.clientInfoStore().clientInfo;
  const signedOutUserId = clientInfo.myUserId || clientInfo.signedOutUserId;

  if (!clientInfo.isSignedIn) {
    throw new Error('unauthorized');
  }

  try {
    if (libData.isOnline()) {
      await fsdata.myUser.deleteMyUser(cause, description, deletePhysically);
    }

    await db.delete<MyUser>(clientInfo.myUserId, ModelType.MyUser);

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedOut === 'function'
      ) {
        const response = (listener as MyUserListener).onSignedOut();
        if (response && typeof response.then === 'function') {
          response.catch((error) => {
            logger.error('deleteMyUser: listener onSignedOut failed.',
              { error });
          });
        }
      }
    }

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    logger.error('deleteMyUser: fsdata.myUser.deleteMyUser failed', error);
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteMyUser;
