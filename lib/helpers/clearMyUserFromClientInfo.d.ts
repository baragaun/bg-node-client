import { ClientInfo } from '../types/models/ClientInfo.js';
declare const clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
export default clearMyUserFromClientInfo;
