import SignalClient from '@signalapp/libsignal-client';
// Extend the public SignalClient.SenderKeyStore.
export class RxdbSenderKeyStore extends SignalClient.SenderKeyStore {
    senderKeys;
    constructor(senderKeys) {
        super();
        this.senderKeys = senderKeys;
    }
    // Compose a composite key from the sender's ProtocolAddress and distributionId.
    composeKey(sender, distributionId) {
        return `${sender.toString()}-${distributionId}`;
    }
    // Save (or update) a sender key record.
    async saveSenderKey(sender, distributionId, record) {
        const key = this.composeKey(sender, distributionId);
        const recordStr = JSON.stringify(record);
        const existing = await this.senderKeys.findOne(key).exec();
        if (existing) {
            // await existing.atomicUpdate(() => ({ record: recordStr }));
            await existing.update({ $set: { record: recordStr } });
        }
        else {
            await this.senderKeys.insert({ id: key, record: recordStr });
        }
    }
    // Retrieve a sender key record by sender and distributionId.
    async getSenderKey(sender, distributionId) {
        const key = this.composeKey(sender, distributionId);
        const doc = await this.senderKeys.findOne(key).exec();
        if (!doc) {
            return null;
        }
        return JSON.parse(doc.record);
    }
}
//# sourceMappingURL=RxdbSenderKeyStore.js.map