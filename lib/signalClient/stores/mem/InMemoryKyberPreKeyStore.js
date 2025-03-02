import SignalClient from '@signalapp/libsignal-client';
export class InMemoryKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
    state = new Map();
    used = new Set();
    async saveKyberPreKey(id, record) {
        this.state.set(id, record.serialize());
    }
    async getKyberPreKey(id) {
        const record = this.state.get(id);
        if (!record) {
            throw new Error(`kyber pre-key ${id} not found`);
        }
        return SignalClient.KyberPreKeyRecord.deserialize(record);
    }
    async markKyberPreKeyUsed(id) {
        this.used.add(id);
    }
    async hasKyberPreKeyBeenUsed(id) {
        return this.used.has(id);
    }
}
//# sourceMappingURL=InMemoryKyberPreKeyStore.js.map