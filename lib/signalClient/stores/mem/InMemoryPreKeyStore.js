import SignalClient from '@signalapp/libsignal-client';
export class InMemoryPreKeyStore extends SignalClient.PreKeyStore {
    state = new Map();
    async savePreKey(id, record) {
        this.state.set(id, record.serialize());
    }
    async getPreKey(id) {
        const record = this.state.get(id);
        if (!record) {
            throw new Error(`pre-key ${id} not found`);
        }
        return SignalClient.PreKeyRecord.deserialize(record);
    }
    async removePreKey(id) {
        this.state.delete(id);
    }
}
//# sourceMappingURL=InMemoryPreKeyStore.js.map