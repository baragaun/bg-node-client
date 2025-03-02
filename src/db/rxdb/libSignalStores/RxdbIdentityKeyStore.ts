import { RxCollection } from 'rxdb';
import SignalClient from '@signalapp/libsignal-client';

import { BgNodeClientConfig } from '../../../types/BgNodeClientConfig.js';
import { IdentityKeyDocument, RegistrationDocument } from './types.js';
import { MyUser } from '../../../types/models/MyUser.js';

type Registration = {
  registrationId: number;
  privateKey: SignalClient.PrivateKey;
}

export class RxdbIdentityKeyStore extends SignalClient.IdentityKeyStore {
  private identityKeyCollection: RxCollection<IdentityKeyDocument>;
  private registrationCollection: RxCollection<RegistrationDocument>;
  private _registration: Registration | null = null;
  private _myUser: MyUser | null | undefined = undefined;
  private _config: BgNodeClientConfig;

  constructor(
    identityKeyCollection: RxCollection<IdentityKeyDocument>,
    registrationCollection: RxCollection<RegistrationDocument>,
    config: BgNodeClientConfig,
  ) {
    super();

    this.identityKeyCollection = identityKeyCollection;
    this.registrationCollection = registrationCollection;
    this._config = config;
  }

  public async init(myUser: MyUser | null | undefined): Promise<void> {
    this._myUser = myUser;

    if (this._myUser) {
      await this._loadRegistration();

      if (!this._registration) {
        await this._createNewRegistration();
      }
    }
  }

  public async setMyUser(myUser: MyUser | null | undefined): Promise<void> {
    this._myUser = myUser;
    await this._loadRegistration();

    if (!this._registration) {
      await this._createNewRegistration();
    }
  }

  // This returns the stored private identity key.
  async getIdentityKey(): Promise<SignalClient.PrivateKey> {
    if (!this._registration?.privateKey) {
      throw new Error('No registration document found.');
    }

    return  this._registration?.privateKey;
  }

  // This returns the locally generated registration ID.
  async getLocalRegistrationId(): Promise<number> {
    if (!this._registration?.registrationId) {
      throw new Error('No registration document found.');
    }

    return  this._registration?.registrationId;
  }

  async saveIdentity(
    address: SignalClient.ProtocolAddress,
    publicKey: SignalClient.PublicKey,
  ): Promise<boolean> {
    const existingPublicKey = await this.getIdentity(address);

    if (existingPublicKey) {
      // Optionally, you might want to update if the key has changed.
      if (publicKey.compare(publicKey)) {
        return true;
      }

      // Key mismatch means untrusted identity.
      console.error('RxbIdentityKeyStore.saveIdentity: Key mismatch');
      return false;
    }

    const keyStr = publicKey.serialize().toString('base64');
    const identityKeyDoc: IdentityKeyDocument = {
      id: address.toString(),
      publicKey: keyStr,
    };
    await this.identityKeyCollection.insert(identityKeyDoc);

    return true;
  }

  // Check whether the identity key for a ProtocolAddress is trusted.
  async isTrustedIdentity(
    address: SignalClient.ProtocolAddress,
    publicKey: SignalClient.PublicKey,
    // direction: SignalClient.Direction,
  ): Promise<boolean> {
    const existingPublicKey = await this.getIdentity(address);

    return existingPublicKey.compare(publicKey) === 0;
  }

  async getIdentity(
    address: SignalClient.ProtocolAddress,
  ): Promise<SignalClient.PublicKey | null> {
    const id = address.toString();

    const dbDoc = await this.identityKeyCollection
      .findOne(id)
      .exec();

    if (!dbDoc) {
      // No record yet; by Signal spec, you can decide to trust on first use.
      return null;
    }

    const identityKeyDoc: IdentityKeyDocument = dbDoc.toMutableJSON();
    const buffer = Buffer.from(identityKeyDoc.publicKey, 'base64');

    return SignalClient.PublicKey.deserialize(buffer);
  }

  private async _createNewRegistration(): Promise<void> {
    if (!this._myUser) {
      console.error('RxdbIdentityKeyStore._createNewRegistration: No myUser');
      return;
    }

    await this._loadRegistration();

    if (this._registration) {
      // A registration record already exists.
      console.error("Registration found; not creating new one.");
      return;
    }

    const registrationId = this._config.libSignal?.registrationId || 5;
    const privateKey = SignalClient.PrivateKey.generate();
    const privateKeyString = privateKey.serialize().toString('base64');

    const regDoc: RegistrationDocument = {
      id: 'registration',
      registrationId,
      privateKey: privateKeyString,
    };

    await this.registrationCollection.insert(regDoc);

    this._registration = {
      registrationId,
      privateKey,
    };
  }

  private async _loadRegistration(): Promise<void> {
    if (!this._registration) {
      const doc = await this.registrationCollection
        .findOne('registration')
        .exec();

      if (!doc) {
        return null;
      }

      const registrationDocument: RegistrationDocument = doc.toMutableJSON();
      const buffer = Buffer.from(registrationDocument.privateKey, 'base64');
      const privateKey: SignalClient.PrivateKey = SignalClient.PrivateKey.deserialize(buffer);

      this._registration = {
        registrationId: registrationDocument.registrationId,
        privateKey,
      }
    }
  }
}
