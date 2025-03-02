import SignalClient from '@signalapp/libsignal-client';
export class InMemorySignedPreKeyStore extends SignalClient.SignedPreKeyStore {
    state = new Map();
    async saveSignedPreKey(id, record) {
        this.state.set(id, record.serialize());
    }
    async getSignedPreKey(id) {
        const record = this.state.get(id);
        if (!record) {
            throw new Error(`pre-key ${id} not found`);
        }
        return SignalClient.SignedPreKeyRecord.deserialize(record);
    }
}
//# sourceMappingURL=InMemorySignedPreKeyStore.js.map