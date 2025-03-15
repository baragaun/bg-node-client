import { ClientInfo } from '../types/models/ClientInfo.js';
declare const clientInfoStore: {
    clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
    load: () => Promise<ClientInfo>;
    save: (newClientInfo: Partial<ClientInfo>) => Promise<ClientInfo>;
    get: () => ClientInfo | undefined;
};
export default clientInfoStore;
