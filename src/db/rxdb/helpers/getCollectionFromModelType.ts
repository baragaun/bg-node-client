import { RxDatabase, RxCollection } from 'rxdb';

import { ModelType } from '../../../types/enums.js';
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
    return _db.channelInvitations;
  }

  if (type === ModelType.ChannelMessage) {
    // @ts-ignore
    return _db.channelMessages;
  }

  return null;
};

export default getCollectionFromModelType;
