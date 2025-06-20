import db from '../../db/db.js';
import { BgListenerTopic, CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { UserInbox } from '../../models/UserInbox.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyInbox = async (
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<UserInbox>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findMyInbox: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findMyInbox: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      const result = await db.findById<UserInbox>(
        libData.clientInfoStore().myUserId,
        ModelType.MyUser,
      );

      if ((!result.error && result.object) || !allowNetwork) {
        return result;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const response = await fsdata.myUser.findMyInbox();

    if (response.error || !response.object) {
      return response;
    }

    logger.debug('findMyInbox: replacing local user inbox');

    await db.replace<UserInbox>(response.object, ModelType.UserInbox);
    // libData.clientInfoStore().updateMyUserUpdatedAt(new Date(response.object.updatedAt).getTime());

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onMyInboxUpdated === 'function'
      ) {
        logger.debug('findMyInbox: notifying listener', { id: listener.id });
        const listenerResponse = (listener as MyUserListener).onMyInboxUpdated(response.object);
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('findMyInbox: listener onMyInboxUpdated failed.', { error });
          });
        }
      }
    }

    return response;
  } catch (error) {
    logger.error('findMyInbox: fsdata.myUser.findMyInbox failed', error);
    return { error: (error as Error).message };
  }
};

export default findMyInbox;
