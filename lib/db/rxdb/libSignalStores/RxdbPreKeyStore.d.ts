import SignalClient from '@signalapp/libsignal-client';
import { RxCollection } from 'rxdb';
import { PreKeyDocument } from './types.js';
export declare class RxdbPreKeyStore extends SignalClient.PreKeyStore {
    private prekeys;
    constructor(prekeys: RxCollection<PreKeyDocument>);
    savePreKey(id: number, record: SignalClient.PreKeyRecord): Promise<void>;
    getPreKey(id: number): Promise<SignalClient.PreKeyRecord>;
    removePreKey(id: number): Promise<void>;
}
