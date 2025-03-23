import { ClientInfo } from '../types/models/ClientInfo.js';
declare const clientInfoStore: {
    clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
    close: () => void;
    get: () => ClientInfo;
    load: () => Promise<ClientInfo>;
    persist: (newClientInfo?: Partial<ClientInfo>) => Promise<ClientInfo>;
    updateMyUserUpdatedAt: (myUserUpdatedAt: number) => void;
    sessionEnded: () => void;
    sessionStarted: () => void;
};
export default clientInfoStore;
