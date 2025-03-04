import { RxDatabase } from 'rxdb';
import { RxdbIdentityKeyStore } from './RxdbIdentityKeyStore.js';
import { RxdbKyberPreKeyStore } from './RxdbKyberPreKeyStore.js';
import { RxdbPreKeyStore } from './RxdbPreKeyStore.js';
import { RxdbSenderKeyStore } from './RxdbSenderKeyStore.js';
import { RxdbSessionStore } from './RxdbSessionStore.js';
import { RxdbSignedPreKeyStore } from './RxdbSignedPreKeyStore.js';
import { BgNodeClientConfig } from '../../../types/BgNodeClientConfig.js';
import { MyUser } from '../../../types/models/MyUser.js';
export declare class LibSignalStores {
    sender: RxdbSenderKeyStore;
    prekey: RxdbPreKeyStore;
    signed: RxdbSignedPreKeyStore;
    kyber: RxdbKyberPreKeyStore;
    identity: RxdbIdentityKeyStore;
    session: RxdbSessionStore;
    constructor(db: RxDatabase, config: BgNodeClientConfig);
    init(myUser: MyUser | null | undefined): Promise<void>;
}
