import SignalClient from '@signalapp/libsignal-client';
export declare class InMemoryIdentityKeyStore extends SignalClient.IdentityKeyStore {
    private idKeys;
    private localRegistrationId;
    private identityKey;
    constructor(localRegistrationId?: number);
    getIdentityKey(): Promise<SignalClient.PrivateKey>;
    getLocalRegistrationId(): Promise<number>;
    isTrustedIdentity(name: SignalClient.ProtocolAddress, key: SignalClient.PublicKey, _direction: SignalClient.Direction): Promise<boolean>;
    saveIdentity(address: SignalClient.ProtocolAddress, key: SignalClient.PublicKey): Promise<boolean>;
    getIdentity(name: SignalClient.ProtocolAddress): Promise<SignalClient.PublicKey | null>;
}
