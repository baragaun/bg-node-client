import { RxCollection } from 'rxdb';

import {
  fromBase64ToPrivateKey,
  fromBase64ToPublicKey,
  fromPublicKeyToBase64,
} from './helpers.js';
import { IdentityKeyDocument, RegistrationDocument } from '../../types.js';
import SignalClient from '@signalapp/libsignal-client';

// Now implement the IdentityKeyStore with RxDB as the storage layer.
export class RxdbIdentityKeyStore extends SignalClient.IdentityKeyStore {
  private identityKeys: RxCollection<IdentityKeyDocument>;
  private registration: RxCollection<RegistrationDocument>;

  constructor(
    identityKeys: RxCollection<IdentityKeyDocument>,
    registration: RxCollection<RegistrationDocument>,
  ) {
    super();
    this.identityKeys = identityKeys;
    this.registration = registration;
  }

  // This returns the stored private identity key.
  async getIdentityKey(): Promise<SignalClient.PrivateKey> {
    const regDoc = await this.registration.findOne('registration').exec();
    if (!regDoc) {
      throw new Error('No registration document found.');
    }
    // Convert the stored base64 string to the PrivateKey type as needed.
    // (Assume you have a function fromBase64 for that conversion.)
    return fromBase64ToPrivateKey(regDoc.privateKey);
  }

  // This returns the locally generated registration ID.
  async getLocalRegistrationId(): Promise<number> {
    const regDoc = await this.registration.findOne('registration').exec();
    if (!regDoc) {
      throw new Error('No registration document found.');
    }
    return regDoc.registrationId;
  }

  // Save an identity key for a given ProtocolAddress.
  async saveIdentity(name: SignalClient.ProtocolAddress, key: SignalClient.PublicKey): Promise<boolean> {
    const id = name.toString(); // assume ProtocolAddress has a toString method
    const keyStr = fromPublicKeyToBase64(key);
    const existing = await this.identityKeys.findOne(id).exec();
    if (existing) {
      // Optionally, you might want to update if the key has changed.
      if (existing.publicKey === keyStr) {
        return true;
      } else {
        // Key mismatch means untrusted identity.
        return false;
      }
    } else {
      await this.identityKeys.insert({ id, publicKey: keyStr });
      return true;
    }
  }

  // Check whether the identity key for a ProtocolAddress is trusted.
  async isTrustedIdentity(
    name: SignalClient.ProtocolAddress,
    key: SignalClient.PublicKey,
    // direction: SignalClient.Direction,
  ): Promise<boolean> {
    const id = name.toString();
    const existing = await this.identityKeys.findOne(id).exec();
    const keyStr = fromPublicKeyToBase64(key);
    if (!existing) {
      // No record yet; by Signal spec, you can decide to trust on first use.
      return true;
    }
    // Otherwise, compare stored public key with provided key.
    return existing.publicKey === keyStr;
  }

  // Retrieve the stored public identity key for a ProtocolAddress.
  async getIdentity(name: SignalClient.ProtocolAddress): Promise<SignalClient.PublicKey | null> {
    const id = name.toString();
    const doc = await this.identityKeys.findOne(id).exec();
    if (!doc) {
      return null;
    }
    return fromBase64ToPublicKey(doc.publicKey);
  }
}
