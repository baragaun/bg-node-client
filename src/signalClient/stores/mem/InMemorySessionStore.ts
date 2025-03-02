import SignalClient from '@signalapp/libsignal-client';

export class InMemorySessionStore extends SignalClient.SessionStore {
  private state = new Map<string, Buffer>();
  async saveSession(
    name: SignalClient.ProtocolAddress,
    record: SignalClient.SessionRecord
  ): Promise<void> {
    const idx = `${name.name()}::${name.deviceId()}`;
    this.state.set(idx, record.serialize());
  }
  async getSession(
    name: SignalClient.ProtocolAddress
  ): Promise<SignalClient.SessionRecord | null> {
    const idx = `${name.name()}::${name.deviceId()}`;
    const serialized = this.state.get(idx);
    if (serialized) {
      return SignalClient.SessionRecord.deserialize(serialized);
    } else {
      return null;
    }
  }
  async getExistingSessions(
    addresses: SignalClient.ProtocolAddress[]
  ): Promise<SignalClient.SessionRecord[]> {
    return addresses.map((address) => {
      const idx = `${address.name()}::${address.deviceId()}`;
      const serialized = this.state.get(idx);
      if (!serialized) {
        throw `no session for ${idx}`;
      }
      return SignalClient.SessionRecord.deserialize(serialized);
    });
  }
}
