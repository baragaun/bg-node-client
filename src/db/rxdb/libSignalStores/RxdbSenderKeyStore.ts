import { RxCollection } from 'rxdb';
import SignalClient from '@signalapp/libsignal-client';

import { SenderKeyDocument } from './types.js';

export class RxdbSenderKeyStore extends SignalClient.SenderKeyStore {
  private senderKeys: RxCollection<SenderKeyDocument>;

  constructor(senderKeys: RxCollection<SenderKeyDocument>) {
    super();
    this.senderKeys = senderKeys;
  }

  // Compose a composite key from the sender's ProtocolAddress and distributionId.
  private composeKey(sender: SignalClient.ProtocolAddress, distributionId: SignalClient.Uuid): string {
    return `${sender.toString()}-${distributionId}`;
  }

  // Save (or update) a sender key record.
  async saveSenderKey(
    sender: SignalClient.ProtocolAddress,
    distributionId: SignalClient.Uuid,
    record: SignalClient.SenderKeyRecord,
  ): Promise<void> {
    const key = this.composeKey(sender, distributionId);
    const recordStr = JSON.stringify(record);
    const existing = await this.senderKeys.findOne(key).exec();
    if (existing) {
      // await existing.atomicUpdate(() => ({ record: recordStr }));
      await existing.update({ $set: { record: recordStr } });
    } else {
      await this.senderKeys.insert({ id: key, record: recordStr });
    }
  }

  // Retrieve a sender key record by sender and distributionId.
  async getSenderKey(
    sender: SignalClient.ProtocolAddress,
    distributionId: SignalClient.Uuid,
  ): Promise<SignalClient.SenderKeyRecord | null> {
    const key = this.composeKey(sender, distributionId);
    const doc = await this.senderKeys.findOne(key).exec();
    if (!doc) {
      return null;
    }
    return JSON.parse(doc.record);
  }
}
