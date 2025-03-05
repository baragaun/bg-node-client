import SignalClient from '@signalapp/libsignal-client';
export class RxdbSessionStore extends SignalClient.SessionStore {
    sessions;
    constructor(sessions) {
        super();
        this.sessions = sessions;
    }
    // Save (or update) a session record for a given ProtocolAddress.
    async saveSession(address, record) {
        const addressStr = address.toString(); // Ensure your ProtocolAddress can be stringified.
        const recordStr = record.serialize().toString('base64');
        const existing = await this.sessions.findOne(addressStr).exec();
        if (existing) {
            // await existing.atomicUpdate(() => ({ record: recordStr }));
            await existing.patch({ record: recordStr });
        }
        else {
            await this.sessions.insert({ address: addressStr, record: recordStr });
        }
    }
    // Retrieve a session record for a given ProtocolAddress.
    async getSession(name) {
        const address = name.toString();
        const doc = await this.sessions.findOne(address).exec();
        if (!doc) {
            return null;
        }
        const jsonDoc = doc.toMutableJSON();
        const buffer = Buffer.from(jsonDoc.record, 'base64');
        const sessionRecord = SignalClient.SessionRecord.deserialize(buffer);
        return sessionRecord;
    }
    // Retrieve existing sessions for an array of ProtocolAddress objects.
    async getExistingSessions(addresses) {
        const addressStrings = addresses.map((addr) => addr.toString());
        const docs = await this.sessions.find().where('address').in(addressStrings).exec();
        return docs.map((doc) => JSON.parse(doc.record));
    }
}
//# sourceMappingURL=RxdbSessionStore.js.map