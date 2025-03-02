import SignalClient from '@signalapp/libsignal-client';
export class InMemorySessionStore extends SignalClient.SessionStore {
    state = new Map();
    async saveSession(name, record) {
        const idx = `${name.name()}::${name.deviceId()}`;
        this.state.set(idx, record.serialize());
    }
    async getSession(name) {
        const idx = `${name.name()}::${name.deviceId()}`;
        const serialized = this.state.get(idx);
        if (serialized) {
            return SignalClient.SessionRecord.deserialize(serialized);
        }
        else {
            return null;
        }
    }
    async getExistingSessions(addresses) {
        return addresses.map((address) => {
            const idx = `${address.name()}::${address.deviceId()}`;
            const serialized = this.state.get(idx);
            if (!serialized) {
                throw `no session for ${idx}`;
            }
            return SignalClient.SessionRecord.deserialize(serialized);
        });
    }
}
//# sourceMappingURL=InMemorySessionStore.js.map