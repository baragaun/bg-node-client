import libData from './libData.js';
import { BgListenerTopic, ModelType } from '../enums.js';
import logger from './logger.js';
import db from '../db/db.js';
import { MyUser } from '../models/MyUser.js';
import { MyUserListener } from '../types/MyUserListener.js';

const clearUser = async (deleteLocalUser = true): Promise<void> => {
  const clientInfo = libData.clientInfoStore().clientInfo;
  const signedOutUserId = clientInfo.myUserId || clientInfo.signedOutUserId;

  if (deleteLocalUser) {
    await db.delete<MyUser>(clientInfo.myUserId, ModelType.MyUser);
  }

  await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);

  for (const listener of libData.listeners()) {
    if (
      listener.topic === BgListenerTopic.myUser &&
      typeof (listener as MyUserListener).onSignedOut === 'function'
    ) {
      const response = (listener as MyUserListener).onSignedOut();
      if (response && typeof response.then === 'function') {
        response.catch((error) => {
          logger.error('clearUser: listener onSignedOut failed.',
            { error });
        });
      }
    }
  }
};

export default clearUser;
