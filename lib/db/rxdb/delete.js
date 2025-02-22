import { ModelType } from '../../types/enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const deleteFunc = async (id, modelType) => {
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            return;
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        throw new Error('collection-not-found');
    }
    const obj = await collection.find({
        selector: {
            id: {
                $eq: id,
            },
        },
    }).exec();
    if (obj.length !== 1) {
        throw new Error('not-found');
    }
    await obj[0].remove();
    if (modelType === ModelType.Channel) {
        const channelMessagesCollection = getCollectionFromModelType(ModelType.ChannelMessage);
        if (!channelMessagesCollection) {
            throw new Error('channel-messages-collection-not-found');
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
            return;
        }
        for (const message of messages) {
            await message.remove();
        }
    }
};
export default deleteFunc;
//# sourceMappingURL=delete.js.map