import { RxdbIdentityKeyStore } from './RxdbIdentityKeyStore.js';
import { RxdbKyberPreKeyStore } from './RxdbKyberPreKeyStore.js';
import { RxdbPreKeyStore } from './RxdbPreKeyStore.js';
import { RxdbSenderKeyStore } from './RxdbSenderKeyStore.js';
import { RxdbSessionStore } from './RxdbSessionStore.js';
import { RxdbSignedPreKeyStore } from './RxdbSignedPreKeyStore.js';
export class LibSignalStores {
    sender;
    prekey;
    signed;
    kyber;
    identity;
    session;
    constructor(db) {
        this.identity = new RxdbIdentityKeyStore(db.identityKeysCollection, db.registrationCollection);
        this.kyber = new RxdbKyberPreKeyStore(db.kyberPreKeysCollection);
        this.prekey = new RxdbPreKeyStore(db.preKeysCollection);
        this.sender = new RxdbSenderKeyStore(db.senderKeysCollection);
        this.session = new RxdbSessionStore(db.sessionsCollection);
        this.signed = new RxdbSignedPreKeyStore(db.signedPreKeysCollection);
    }
}
//# sourceMappingURL=LibSignalStores.js.map