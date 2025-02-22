import { RxDatabase } from 'rxdb';

import { ModelType, MutationType } from '../../types/enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const deleteFunc = async (
  id: string,
  modelType: ModelType,
): Promise<MutationResult> => {
  const result: MutationResult = { operation: MutationType.delete};

  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      result.error = 'db-unavailable';
      return result;
    }
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    result.error = 'collection-not-found';
    return result;
  }

  const obj = await collection.find({
    selector: {
      id: {
        $eq: id,
      },
    },
  }).exec();

  if (obj.length !== 1) {
    result.error = 'not-found';
    return result;
  }

  await obj[0].remove();

  if (modelType === ModelType.Channel) {
    const channelMessagesCollection = getCollectionFromModelType(ModelType.ChannelMessage);

    if (!channelMessagesCollection) {
      result.error = 'channel-messages-collection-not-found';
      return result;
    }

    // see: https://rxdb.info/rx-query.html
    const messages = await channelMessagesCollection
      .find({
        selector: {
          channelId: {
            $eq: id,
          },
        },
      }).exec();

    if (!Array.isArray(messages) || messages.length < 1) {
      return result;
    }

    for (const message of messages) {
      await message.remove();
    }
  }

  return result;
};

export default deleteFunc;
