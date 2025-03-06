import SignalClient from '@signalapp/libsignal-client';
import { RxCollection } from 'rxdb';
import { SignedPreKeyDocument } from './types.js';
export declare class RxdbSignedPreKeyStore extends SignalClient.SignedPreKeyStore {
    private signedPreKeys;
    constructor(signedPreKeys: RxCollection<SignedPreKeyDocument>);
    saveSignedPreKey(id: number, record: SignalClient.SignedPreKeyRecord): Promise<void>;
    getSignedPreKey(id: number): Promise<SignalClient.SignedPreKeyRecord>;
}
