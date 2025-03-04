import SignalClient from '@signalapp/libsignal-client';

export class InMemoryIdentityKeyStore extends SignalClient.IdentityKeyStore {
  private idKeys = new Map<string, SignalClient.PublicKey>();
  private localRegistrationId: number;
  private identityKey: SignalClient.PrivateKey;

  constructor(localRegistrationId?: number) {
    super();
    this.identityKey = SignalClient.PrivateKey.generate();
    this.localRegistrationId = localRegistrationId ?? 5;
  }

  async getIdentityKey(): Promise<SignalClient.PrivateKey> {
    return this.identityKey;
  }

  async getLocalRegistrationId(): Promise<number> {
    return this.localRegistrationId;
  }

  async isTrustedIdentity(
    name: SignalClient.ProtocolAddress,
    key: SignalClient.PublicKey,
    _direction: SignalClient.Direction,
  ): Promise<boolean> {
    const idx = `${name.name()}::${name.deviceId()}`;
    const currentKey = this.idKeys.get(idx);
    if (currentKey) {
      return currentKey.compare(key) == 0;
    } else {
      return true;
    }
  }

  async saveIdentity(address: SignalClient.ProtocolAddress, key: SignalClient.PublicKey): Promise<boolean> {
    const idx = `${address.name()}::${address.deviceId()}`;
    const currentKey = this.idKeys.get(idx);
    if (currentKey) {
      const changed = currentKey.compare(key) != 0;
      this.idKeys.set(idx, key);
      return changed;
    }

    this.idKeys.set(idx, key);
    return false;
  }

  async getIdentity(name: SignalClient.ProtocolAddress): Promise<SignalClient.PublicKey | null> {
    const idx = `${name.name()}::${name.deviceId()}`;
    return this.idKeys.get(idx) ?? null;
  }
}
