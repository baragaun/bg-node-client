import { RxCollection } from 'rxdb';
import SignalClient from '@signalapp/libsignal-client';
import { IdentityKeyDocument, RegistrationDocument } from '../../types.js';
export declare class RxdbIdentityKeyStore extends SignalClient.IdentityKeyStore {
    private identityKeys;
    private registration;
    constructor(identityKeys: RxCollection<IdentityKeyDocument>, registration: RxCollection<RegistrationDocument>);
    getIdentityKey(): Promise<SignalClient.PrivateKey>;
    getLocalRegistrationId(): Promise<number>;
    saveIdentity(name: SignalClient.ProtocolAddress, key: SignalClient.PublicKey): Promise<boolean>;
    isTrustedIdentity(name: SignalClient.ProtocolAddress, key: SignalClient.PublicKey): Promise<boolean>;
    getIdentity(name: SignalClient.ProtocolAddress): Promise<SignalClient.PublicKey | null>;
}
