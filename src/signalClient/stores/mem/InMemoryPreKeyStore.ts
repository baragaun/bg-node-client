import SignalClient from '@signalapp/libsignal-client';

export class InMemoryPreKeyStore extends SignalClient.PreKeyStore {
  private state = new Map<number, Buffer>();
  async savePreKey(id: number, record: SignalClient.PreKeyRecord): Promise<void> {
    this.state.set(id, record.serialize());
  }
  async getPreKey(id: number): Promise<SignalClient.PreKeyRecord> {
    const record = this.state.get(id);
    if (!record) {
      throw new Error(`pre-key ${id} not found`);
    }
    return SignalClient.PreKeyRecord.deserialize(record);
  }
  async removePreKey(id: number): Promise<void> {
    this.state.delete(id);
  }
}
