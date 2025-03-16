import { ClientInfo } from '../types/models/ClientInfo.js';
declare const saveClientInfo: (clientInfo: Partial<ClientInfo>) => Promise<ClientInfo>;
export default saveClientInfo;
