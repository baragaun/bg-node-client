import { RxCollection } from 'rxdb';
import SignalClient from '@signalapp/libsignal-client';
import { SessionDocument } from './types.js';
export declare class RxdbSessionStore extends SignalClient.SessionStore {
    private sessions;
    constructor(sessions: RxCollection<SessionDocument>);
    saveSession(address: SignalClient.ProtocolAddress, record: SignalClient.SessionRecord): Promise<void>;
    getSession(name: SignalClient.ProtocolAddress): Promise<SignalClient.SessionRecord | null>;
    getExistingSessions(addresses: SignalClient.ProtocolAddress[]): Promise<SignalClient.SessionRecord[]>;
}
