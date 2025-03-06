import SignalClient from '@signalapp/libsignal-client';
import { RxCollection } from 'rxdb';
import { KyberPreKeyDocument } from './types.js';
export declare class RxdbKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
    private kyberPreKeys;
    constructor(kyberPreKeys: RxCollection<KyberPreKeyDocument>);
    saveKyberPreKey(kyberPreKeyId: number, record: SignalClient.KyberPreKeyRecord): Promise<void>;
    getKyberPreKey(kyberPreKeyId: number): Promise<SignalClient.KyberPreKeyRecord>;
    markKyberPreKeyUsed(kyberPreKeyId: number): Promise<void>;
}
