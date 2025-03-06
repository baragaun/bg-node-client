import SignalClient from '@signalapp/libsignal-client';
import { RxCollection } from 'rxdb';

import { KyberPreKeyDocument } from './types.js';

export class RxdbKyberPreKeyStore extends SignalClient.KyberPreKeyStore {
  private kyberPreKeys: RxCollection<KyberPreKeyDocument>;

  constructor(kyberPreKeys: RxCollection<KyberPreKeyDocument>) {
    super();
    this.kyberPreKeys = kyberPreKeys;
  }

  // Save (or update) a Kyber prekey record for a given prekey id.
  async saveKyberPreKey(kyberPreKeyId: number, record: SignalClient.KyberPreKeyRecord): Promise<void> {
    const key = kyberPreKeyId.toString();
    const recordStr = record.serialize().toString('base64');

    const dbDoc = await this.kyberPreKeys.findOne(key).exec();

    if (dbDoc) {
      // Update record and mark as not used.
      // await existing.atomicUpdate(() => ({ record: recordStr, used: false }));
      await dbDoc.patch({ record: recordStr, used: false });
    } else {
      await this.kyberPreKeys.insert({ id: key, record: recordStr, used: false });
    }
  }

  // Retrieve the Kyber prekey record for a given prekey id.
  async getKyberPreKey(kyberPreKeyId: number): Promise<SignalClient.KyberPreKeyRecord> {
    const key = kyberPreKeyId.toString();
    const dbDoc = await this.kyberPreKeys.findOne(key).exec();

    if (!dbDoc) {
      throw new Error(`No Kyber prekey found with id ${kyberPreKeyId}`);
    }

    const kyberPreKeyDoc = dbDoc.toMutableJSON();
    const buffer = Buffer.from(kyberPreKeyDoc.record, 'base64');

    return SignalClient.KyberPreKeyRecord.deserialize(buffer);
  }

  // Mark the Kyber prekey with the given id as used.
  async markKyberPreKeyUsed(kyberPreKeyId: number): Promise<void> {
    const key = kyberPreKeyId.toString();
    const dbDoc = await this.kyberPreKeys.findOne(key).exec();

    if (!dbDoc) {
      throw new Error(`Cannot mark non-existent Kyber prekey with id ${kyberPreKeyId} as used.`);
    }

    // await doc.atomicUpdate(() => ({ used: true }));
    await dbDoc.patch({ used: true });
  }
}
