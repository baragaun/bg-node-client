import { InMemoryIdentityKeyStore } from './InMemoryIdentityKeyStore.js';
import { InMemoryKyberPreKeyStore } from './InMemoryKyberPreKeyStore.js';
import { InMemoryPreKeyStore } from './InMemoryPreKeyStore.js';
import { InMemorySenderKeyStore } from './InMemorySenderKeyStore.js';
import { InMemorySessionStore } from './InMemorySessionStore.js';
import { InMemorySignedPreKeyStore } from './InMemorySignedPreKeyStore.js';
export class LibSignalMemStores {
    sender;
    prekey;
    signed;
    kyber;
    identity;
    session;
    constructor() {
        this.sender = new InMemorySenderKeyStore();
        this.prekey = new InMemoryPreKeyStore();
        this.signed = new InMemorySignedPreKeyStore();
        this.kyber = new InMemoryKyberPreKeyStore();
        this.identity = new InMemoryIdentityKeyStore();
        this.session = new InMemorySessionStore();
    }
}
//# sourceMappingURL=LibSignalMemStores.js.map