import { ClientInfo } from '../types/models/ClientInfo.js';
declare const clientInfoStore: {
    clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
    close: () => void;
    load: () => Promise<ClientInfo>;
    persist: (newClientInfo?: Partial<ClientInfo>) => Promise<ClientInfo>;
    get: () => ClientInfo;
};
export default clientInfoStore;
