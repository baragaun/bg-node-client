import SignalClient from '@signalapp/libsignal-client';
export class RxdbSignedPreKeyStore extends SignalClient.SignedPreKeyStore {
    signedPreKeys;
    constructor(signedPreKeys) {
        super();
        this.signedPreKeys = signedPreKeys;
    }
    // Save (or update) a signed prekey record for the given prekey id.
    async saveSignedPreKey(id, record) {
        const key = id.toString();
        const recordStr = JSON.stringify(record);
        const existing = await this.signedPreKeys.findOne(key).exec();
        if (existing) {
            // await existing.atomicUpdate(() => ({ record: recordStr }));
            await existing.update({ $set: { record: recordStr } });
        }
        else {
            await this.signedPreKeys.insert({ id: key, record: recordStr });
        }
    }
    // Retrieve the signed prekey record for the given prekey id.
    async getSignedPreKey(id) {
        const key = id.toString();
        const doc = await this.signedPreKeys.findOne(key).exec();
        if (!doc) {
            throw new Error(`No signed prekey found with id ${id}`);
        }
        return JSON.parse(doc.record);
    }
}
//# sourceMappingURL=RxdbSignedPreKeyStore.js.map