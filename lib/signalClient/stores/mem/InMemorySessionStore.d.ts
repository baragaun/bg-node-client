import SignalClient from '@signalapp/libsignal-client';
export declare class InMemorySessionStore extends SignalClient.SessionStore {
    private state;
    saveSession(name: SignalClient.ProtocolAddress, record: SignalClient.SessionRecord): Promise<void>;
    getSession(name: SignalClient.ProtocolAddress): Promise<SignalClient.SessionRecord | null>;
    getExistingSessions(addresses: SignalClient.ProtocolAddress[]): Promise<SignalClient.SessionRecord[]>;
}
