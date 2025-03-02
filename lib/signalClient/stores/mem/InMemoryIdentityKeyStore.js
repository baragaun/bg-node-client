import SignalClient from '@signalapp/libsignal-client';
export class InMemoryIdentityKeyStore extends SignalClient.IdentityKeyStore {
    idKeys = new Map();
    localRegistrationId;
    identityKey;
    constructor(localRegistrationId) {
        super();
        this.identityKey = SignalClient.PrivateKey.generate();
        this.localRegistrationId = localRegistrationId ?? 5;
    }
    async getIdentityKey() {
        return this.identityKey;
    }
    async getLocalRegistrationId() {
        return this.localRegistrationId;
    }
    async isTrustedIdentity(name, key, _direction) {
        const idx = `${name.name()}::${name.deviceId()}`;
        const currentKey = this.idKeys.get(idx);
        if (currentKey) {
            return currentKey.compare(key) == 0;
        }
        else {
            return true;
        }
    }
    async saveIdentity(address, key) {
        const idx = `${address.name()}::${address.deviceId()}`;
        const currentKey = this.idKeys.get(idx);
        if (currentKey) {
            const changed = currentKey.compare(key) != 0;
            this.idKeys.set(idx, key);
            return changed;
        }
        this.idKeys.set(idx, key);
        return false;
    }
    async getIdentity(name) {
        const idx = `${name.name()}::${name.deviceId()}`;
        return this.idKeys.get(idx) ?? null;
    }
}
//# sourceMappingURL=InMemoryIdentityKeyStore.js.map