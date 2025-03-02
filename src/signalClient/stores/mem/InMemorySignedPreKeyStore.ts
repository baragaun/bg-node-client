import SignalClient from '@signalapp/libsignal-client';

export class InMemorySignedPreKeyStore extends SignalClient.SignedPreKeyStore {
  private state = new Map<number, Buffer>();
  async saveSignedPreKey(
    id: number,
    record: SignalClient.SignedPreKeyRecord
  ): Promise<void> {
    this.state.set(id, record.serialize());
  }
  async getSignedPreKey(id: number): Promise<SignalClient.SignedPreKeyRecord> {
    const record = this.state.get(id);
    if (!record) {
      throw new Error(`pre-key ${id} not found`);
    }
    return SignalClient.SignedPreKeyRecord.deserialize(record);
  }
}
