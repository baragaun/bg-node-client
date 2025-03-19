import { ClientInfo } from '../types/models/ClientInfo.js';
declare const persistClientInfo: (clientInfo: Partial<ClientInfo>) => Promise<ClientInfo>;
export default persistClientInfo;
