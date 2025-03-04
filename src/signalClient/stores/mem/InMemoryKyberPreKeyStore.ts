import SignalClient from '@signalapp/libsignal-client';

export class InMemoryKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
  private state = new Map<number, Buffer>();
  private used = new Set<number>();
  async saveKyberPreKey(id: number, record: SignalClient.KyberPreKeyRecord): Promise<void> {
    this.state.set(id, record.serialize());
  }
  async getKyberPreKey(id: number): Promise<SignalClient.KyberPreKeyRecord> {
    const record = this.state.get(id);
    if (!record) {
      throw new Error(`kyber pre-key ${id} not found`);
    }
    return SignalClient.KyberPreKeyRecord.deserialize(record);
  }
  async markKyberPreKeyUsed(id: number): Promise<void> {
    this.used.add(id);
  }
  async hasKyberPreKeyBeenUsed(id: number): Promise<boolean> {
    return this.used.has(id);
  }
}
