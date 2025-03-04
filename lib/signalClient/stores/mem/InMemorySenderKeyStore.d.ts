import SignalClient from '@signalapp/libsignal-client';
export declare class InMemorySenderKeyStore extends SignalClient.SenderKeyStore {
    private state;
    saveSenderKey(sender: SignalClient.ProtocolAddress, distributionId: SignalClient.Uuid, record: SignalClient.SenderKeyRecord): Promise<void>;
    getSenderKey(sender: SignalClient.ProtocolAddress, distributionId: SignalClient.Uuid): Promise<SignalClient.SenderKeyRecord | null>;
}
