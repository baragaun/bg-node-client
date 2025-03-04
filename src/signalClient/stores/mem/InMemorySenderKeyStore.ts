import SignalClient from '@signalapp/libsignal-client';

export class InMemorySenderKeyStore extends SignalClient.SenderKeyStore {
  private state = new Map<string, SignalClient.SenderKeyRecord>();
  async saveSenderKey(
    sender: SignalClient.ProtocolAddress,
    distributionId: SignalClient.Uuid,
    record: SignalClient.SenderKeyRecord,
  ): Promise<void> {
    const idx = `${distributionId}::${sender.name()}::${sender.deviceId()}`;
    this.state.set(idx, record);
  }
  async getSenderKey(
    sender: SignalClient.ProtocolAddress,
    distributionId: SignalClient.Uuid,
  ): Promise<SignalClient.SenderKeyRecord | null> {
    const idx = `${distributionId}::${sender.name()}::${sender.deviceId()}`;
    return this.state.get(idx) ?? null;
  }
}
