import { RxCollection, RxDatabase } from "rxdb";

import db from "./db.js";
import { ModelType } from "../../enums.js";

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
    return _db["channel-invitations"];
  }

  if (type === ModelType.ChannelMessage) {
    // @ts-ignore
    return _db["channel-messages"];
  }

  if (type === ModelType.ChannelParticipant) {
    // @ts-ignore
    return _db["channel-participants"];
  }

  if (type === ModelType.MyUser) {
    // @ts-ignore
    return _db["my-user"];
  }

  if (type === ModelType.ClientInfo) {
    // @ts-ignore
    return _db["client-info"];
  }

  if (type === ModelType.User) {
    // @ts-ignore
    return _db.users;
  }

  return null;
};

export default getCollectionFromModelType;
