import SignalClient from '@signalapp/libsignal-client';
export class InMemorySenderKeyStore extends SignalClient.SenderKeyStore {
    state = new Map();
    async saveSenderKey(sender, distributionId, record) {
        const idx = `${distributionId}::${sender.name()}::${sender.deviceId()}`;
        this.state.set(idx, record);
    }
    async getSenderKey(sender, distributionId) {
        const idx = `${distributionId}::${sender.name()}::${sender.deviceId()}`;
        return this.state.get(idx) ?? null;
    }
}
//# sourceMappingURL=InMemorySenderKeyStore.js.map