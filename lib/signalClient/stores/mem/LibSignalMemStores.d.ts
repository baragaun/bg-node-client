import { InMemoryIdentityKeyStore } from './InMemoryIdentityKeyStore.js';
import { InMemoryKyberPreKeyStore } from './InMemoryKyberPreKeyStore.js';
import { InMemoryPreKeyStore } from './InMemoryPreKeyStore.js';
import { InMemorySenderKeyStore } from './InMemorySenderKeyStore.js';
import { InMemorySessionStore } from './InMemorySessionStore.js';
import { InMemorySignedPreKeyStore } from './InMemorySignedPreKeyStore.js';
export declare class LibSignalMemStores {
    sender: InMemorySenderKeyStore;
    prekey: InMemoryPreKeyStore;
    signed: InMemorySignedPreKeyStore;
    kyber: InMemoryKyberPreKeyStore;
    identity: InMemoryIdentityKeyStore;
    session: InMemorySessionStore;
    constructor();
}
