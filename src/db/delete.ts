import { RxDatabase } from 'rxdb';

import { ModelType, MutationType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const deleteFunc = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  const result: QueryResult<T> = { operation: MutationType.delete };

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

  const obj = await collection
    .find({
      selector: {
        id: {
          $eq: id,
        },
      },
    })
    .exec();

  if (obj.length !== 1) {
    result.error = 'not-found';
    return result;
  }

  await obj[0].remove();

  if (modelType === ModelType.Channel) {
    const channelMessagesCollection = getCollectionFromModelType(
      ModelType.ChannelMessage,
    );

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
      })
      .exec();

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
