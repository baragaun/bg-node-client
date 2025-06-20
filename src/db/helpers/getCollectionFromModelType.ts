import { RxCollection, RxDatabase } from 'rxdb';

import db from './db.js';
import { ModelType } from '../../enums.js';
import { DbCollection } from '../enums.js';

let _db: RxDatabase | undefined = undefined;

const getCollectionFromModelType = (type: ModelType): RxCollection | null => {
  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      return null;
    }
  }

  if (type === ModelType.Channel) {
    return _db[DbCollection.channels];
  }

  if (type === ModelType.ChannelInvitation) {
    return _db[DbCollection.channelInvitations];
  }

  if (type === ModelType.ChannelMessage) {
    return _db[DbCollection.channelMessages];
  }

  if (type === ModelType.ChannelParticipant) {
    return _db[DbCollection.channelParticipants];
  }

  if (type === ModelType.MyUser) {
    return _db[DbCollection.myUser];
  }

  if (type === ModelType.ClientInfo) {
    return _db[DbCollection.clientInfo];
  }

  if (type === ModelType.User) {
    return _db[DbCollection.users];
  }

  if (type === ModelType.Wallet) {
    return _db[DbCollection.wallets];
  }

  return null;
};

export default getCollectionFromModelType;
