import SignalClient from '@signalapp/libsignal-client';
export declare class InMemoryPreKeyStore extends SignalClient.PreKeyStore {
    private state;
    savePreKey(id: number, record: SignalClient.PreKeyRecord): Promise<void>;
    getPreKey(id: number): Promise<SignalClient.PreKeyRecord>;
    removePreKey(id: number): Promise<void>;
}
