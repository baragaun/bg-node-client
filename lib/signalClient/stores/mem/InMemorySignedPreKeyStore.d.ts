import SignalClient from '@signalapp/libsignal-client';
export declare class InMemorySignedPreKeyStore extends SignalClient.SignedPreKeyStore {
    private state;
    saveSignedPreKey(id: number, record: SignalClient.SignedPreKeyRecord): Promise<void>;
    getSignedPreKey(id: number): Promise<SignalClient.SignedPreKeyRecord>;
}
