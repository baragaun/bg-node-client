import { RxCollection } from 'rxdb';
import SignalClient from '@signalapp/libsignal-client';
import { SenderKeyDocument } from './types.js';
export declare class RxdbSenderKeyStore extends SignalClient.SenderKeyStore {
    private senderKeys;
    constructor(senderKeys: RxCollection<SenderKeyDocument>);
    private composeKey;
    saveSenderKey(sender: SignalClient.ProtocolAddress, distributionId: SignalClient.Uuid, record: SignalClient.SenderKeyRecord): Promise<void>;
    getSenderKey(sender: SignalClient.ProtocolAddress, distributionId: SignalClient.Uuid): Promise<SignalClient.SenderKeyRecord | null>;
}
