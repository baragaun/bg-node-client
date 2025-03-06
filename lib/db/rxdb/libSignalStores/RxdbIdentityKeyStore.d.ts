import SignalClient from '@signalapp/libsignal-client';
import { RxCollection } from 'rxdb';
import { BgNodeClientConfig } from '../../../types/BgNodeClientConfig.js';
import { MyUser } from '../../../types/models/MyUser.js';
import { IdentityKeyDocument, RegistrationDocument } from './types.js';
export declare class RxdbIdentityKeyStore extends SignalClient.IdentityKeyStore {
    private identityKeyCollection;
    private registrationCollection;
    private _registration;
    private _myUser;
    private _config;
    constructor(identityKeyCollection: RxCollection<IdentityKeyDocument>, registrationCollection: RxCollection<RegistrationDocument>, config: BgNodeClientConfig);
    init(myUser: MyUser | null | undefined): Promise<void>;
    setMyUser(myUser: MyUser | null | undefined): Promise<void>;
    getIdentityKey(): Promise<SignalClient.PrivateKey>;
    getLocalRegistrationId(): Promise<number>;
    saveIdentity(address: SignalClient.ProtocolAddress, publicKey: SignalClient.PublicKey): Promise<boolean>;
    isTrustedIdentity(address: SignalClient.ProtocolAddress, publicKey: SignalClient.PublicKey): Promise<boolean>;
    getIdentity(address: SignalClient.ProtocolAddress): Promise<SignalClient.PublicKey | null>;
    private _createNewRegistration;
    private _loadRegistration;
}
