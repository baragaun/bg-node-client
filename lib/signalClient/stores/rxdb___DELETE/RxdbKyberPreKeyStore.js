import SignalClient from '@signalapp/libsignal-client';
// Extend the public SignalClient.KyberPreKeyStore.
export class RxdbKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
    kyberPreKeys;
    constructor(kyberPreKeys) {
        super();
        this.kyberPreKeys = kyberPreKeys;
    }
    // Save (or update) a Kyber prekey record for a given prekey id.
    async saveKyberPreKey(kyberPreKeyId, record) {
        const key = kyberPreKeyId.toString();
        const recordStr = JSON.stringify(record);
        const existing = await this.kyberPreKeys.findOne(key).exec();
        if (existing) {
            // Update record and mark as not used.
            // await existing.atomicUpdate(() => ({ record: recordStr, used: false }));
            await existing.update({ $set: { record: recordStr, used: false } });
        }
        else {
            await this.kyberPreKeys.insert({ id: key, record: recordStr, used: false });
        }
    }
    // Retrieve the Kyber prekey record for a given prekey id.
    async getKyberPreKey(kyberPreKeyId) {
        const key = kyberPreKeyId.toString();
        const doc = await this.kyberPreKeys.findOne(key).exec();
        if (!doc) {
            throw new Error(`No Kyber prekey found with id ${kyberPreKeyId}`);
        }
        return JSON.parse(doc.record);
    }
    // Mark the Kyber prekey with the given id as used.
    async markKyberPreKeyUsed(kyberPreKeyId) {
        const key = kyberPreKeyId.toString();
        const doc = await this.kyberPreKeys.findOne(key).exec();
        if (doc) {
            // await doc.atomicUpdate(() => ({ used: true }));
            await doc.update({ $set: { used: true } });
        }
        else {
            throw new Error(`Cannot mark non-existent Kyber prekey with id ${kyberPreKeyId} as used.`);
        }
    }
}
//# sourceMappingURL=RxdbKyberPreKeyStore.js.map