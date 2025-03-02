import { RxdbIdentityKeyStore } from './RxdbIdentityKeyStore.js';
import { RxdbKyberPreKeyStore } from './RxdbKyberPreKeyStore.js';
import { RxdbPreKeyStore } from './RxdbPreKeyStore.js';
import { RxdbSenderKeyStore } from './RxdbSenderKeyStore.js';
import { RxdbSessionStore } from './RxdbSessionStore.js';
import { RxdbSignedPreKeyStore } from './RxdbSignedPreKeyStore.js';
import { DbCollection } from '../enums.js';
export class LibSignalStores {
    sender;
    prekey;
    signed;
    kyber;
    identity;
    session;
    constructor(db, config) {
        this.identity = new RxdbIdentityKeyStore(db.collections[DbCollection.libSignalIdentityKeys], db.collections[DbCollection.libSignalRegistration], config);
        this.kyber = new RxdbKyberPreKeyStore(db.collections[DbCollection.libSignalKyberPreKeys]);
        this.prekey = new RxdbPreKeyStore(db.collections[DbCollection.libSignalPrekeys]);
        this.sender = new RxdbSenderKeyStore(db.senderKeysCollection);
        this.sender = new RxdbSenderKeyStore(db.collections[DbCollection.libSignalSenderKeys]);
        this.session = new RxdbSessionStore(db.collections[DbCollection.libSignalSessions]);
        this.signed = new RxdbSignedPreKeyStore(db.collections[DbCollection.libSignalSignedPreKeys]);
    }
    async init(myUser) {
        await this.identity.init(myUser);
    }
}
//# sourceMappingURL=LibSignalStores.js.map