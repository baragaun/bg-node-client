import { RxCollection } from 'rxdb';

// Adjust these imports to match your local libsignal protocol module.
import SignalClient from '@signalapp/libsignal-client';
import { SessionDocument } from '../../types.js';

// The RxdbSessionStore implements the abstract SessionStore interface.
export class RxdbSessionStore extends SignalClient.SessionStore {
  private sessions: RxCollection<SessionDocument>;

  constructor(sessions: RxCollection<SessionDocument>) {
    super();
    this.sessions = sessions;
  }

  // Save (or update) a session record for a given ProtocolAddress.
  async saveSession(name: SignalClient.ProtocolAddress, record: SignalClient.SessionRecord): Promise<void> {
    const address = name.toString(); // Ensure your ProtocolAddress can be stringified.
    const recordStr = JSON.stringify(record); // Serialize the session record.
    const existing = await this.sessions.findOne(address).exec();
    if (existing) {
      // await existing.atomicUpdate(() => ({ record: recordStr }));
      await existing.update({ $set: { record: recordStr } });
    } else {
      await this.sessions.insert({ address, record: recordStr });
    }
  }

  // Retrieve a session record for a given ProtocolAddress.
  async getSession(name: SignalClient.ProtocolAddress): Promise<SignalClient.SessionRecord | null> {
    const address = name.toString();
    const doc = await this.sessions.findOne(address).exec();
    if (!doc) return null;
    return JSON.parse(doc.record);
  }

  // Retrieve existing sessions for an array of ProtocolAddress objects.
  async getExistingSessions(addresses: SignalClient.ProtocolAddress[]): Promise<SignalClient.SessionRecord[]> {
    const addressStrings = addresses.map(addr => addr.toString());
    const docs = await this.sessions.find().where('address').in(addressStrings).exec();
    return docs.map(doc => JSON.parse(doc.record));
  }
}
