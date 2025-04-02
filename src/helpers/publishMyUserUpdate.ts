import libData from './libData.js';
import { BgListenerTopic } from '../enums.js';
import logger from './logger.js';
import { MyUser } from '../models/MyUser.js';
import { MyUserListener } from '../types/MyUserListener.js';

const publishMyUserUpdate = (myUser: MyUser): void => {
  for (const listener of libData.listeners()) {
    if (
      listener.topic === BgListenerTopic.myUser &&
      typeof (listener as MyUserListener).onMyUserUpdated === 'function'
    ) {
      const listenerResponse = (listener as MyUserListener).onMyUserUpdated(myUser);
      if (listenerResponse && typeof listenerResponse.then === 'function') {
        listenerResponse.catch((error) => {
          logger.error('publishMyUserUpdate: failed with error.', { error });
        });
      }
    }
  }
};

export default publishMyUserUpdate;
