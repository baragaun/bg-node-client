import SignalClient from '@signalapp/libsignal-client';
export declare class InMemoryKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
    private state;
    private used;
    saveKyberPreKey(id: number, record: SignalClient.KyberPreKeyRecord): Promise<void>;
    getKyberPreKey(id: number): Promise<SignalClient.KyberPreKeyRecord>;
    markKyberPreKeyUsed(id: number): Promise<void>;
    hasKyberPreKeyBeenUsed(id: number): Promise<boolean>;
}
