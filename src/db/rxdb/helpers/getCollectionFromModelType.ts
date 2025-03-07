import { RxCollection, RxDatabase } from 'rxdb';

import { ModelType } from '../../../enums.js';
import db from './db.js';

let _db: RxDatabase | undefined = undefined;

const getCollectionFromModelType = (type: ModelType): RxCollection | null => {
  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      return null;
    }
  }

  if (type === ModelType.Channel) {
    // @ts-ignore
    return _db.channels;
  }

  if (type === ModelType.ChannelInvitation) {
    // @ts-ignore
    return _db.channel_invitations;
  }

  if (type === ModelType.ChannelMessage) {
    // @ts-ignore
    return _db.channel_messages;
  }

  if (type === ModelType.ChannelParticipant) {
    // @ts-ignore
    return _db.channel_participants;
  }

  if (type === ModelType.MyUser) {
    // @ts-ignore
    return _db.my_user;
  }

  if (type === ModelType.User) {
    // @ts-ignore
    return _db.users;
  }

  return null;
};

export default getCollectionFromModelType;
