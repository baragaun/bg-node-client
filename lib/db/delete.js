import { ModelType, MutationType } from '../enums.js';
import cleanup from './cleanup.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const deleteFunc = async (id, modelType) => {
    const result = { operation: MutationType.delete };
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
        .findOne({
        selector: {
            id: {
                $eq: id,
            },
        },
    })
        .exec();
    if (!obj) {
        result.error = 'not-found';
        return result;
    }
    try {
        await obj.remove();
    }
    catch (error) {
        // see: https://rxdb.info/rx-document.html#prevent-conflicts-with-the-incremental-methods
        console.error('Failed to remove object from collection', { id, modelType, error });
        try {
            await obj.incrementalRemove();
        }
        catch (error2) {
            // fallback to incremental remove if the first remove fails
            console.error('Failed to incrementally remove object from collection', { id, modelType, error: error2 });
            result.error = 'remove-failed';
            return result;
        }
    }
    if (modelType === ModelType.MyUser) {
        await cleanup(ModelType.MyUser);
    }
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
//# sourceMappingURL=delete.js.map