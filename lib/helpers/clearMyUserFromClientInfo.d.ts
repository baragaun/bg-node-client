import { ClientInfo } from '../models/ClientInfo.js';
declare const clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
export default clearMyUserFromClientInfo;
