import { RxCollection } from 'rxdb';

import SignalClient from '@signalapp/libsignal-client';
import { PreKeyDocument } from '../../types.js';

// Extend the public SignalClient.PreKeyStore.
export class RxdbPreKeyStore extends SignalClient.PreKeyStore {
  private prekeys: RxCollection<PreKeyDocument>;

  constructor(prekeys: RxCollection<PreKeyDocument>) {
    super();
    this.prekeys = prekeys;
  }

  // Save (or update) a prekey record for the given prekey id.
  async savePreKey(id: number, record: SignalClient.PreKeyRecord): Promise<void> {
    const key = id.toString();
    const recordStr = JSON.stringify(record);
    const existing = await this.prekeys.findOne(key).exec();
    if (existing) {
      // await existing.atomicUpdate(() => ({ record: recordStr }));
      await existing.update({ $set: { record: recordStr } });
    } else {
      await this.prekeys.insert({ id: key, record: recordStr });
    }
  }

  // Retrieve the prekey record for the given prekey id.
  async getPreKey(id: number): Promise<SignalClient.PreKeyRecord> {
    const key = id.toString();
    const doc = await this.prekeys.findOne(key).exec();
    if (!doc) {
      throw new Error(`No prekey found with id ${id}`);
    }
    return JSON.parse(doc.record);
  }

  // Remove the prekey record for the given prekey id.
  async removePreKey(id: number): Promise<void> {
    const key = id.toString();
    const doc = await this.prekeys.findOne(key).exec();
    if (doc) {
      await doc.remove();
    }
  }
}
