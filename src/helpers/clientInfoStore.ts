import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import persistClientInfo from './persistClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';

let _clientInfo: ClientInfo | undefined = undefined;

const clientInfoStore = {
  clearMyUserFromClientInfo,

  close: (): void => {
    _clientInfo = undefined;
  },

  load: async (): Promise<ClientInfo> => {
    try {
      _clientInfo = await loadClientInfo();
    } catch (error) {
      logger.error('Error loading client info:', error);
    }

    return _clientInfo || new ClientInfo();
  },

  persist: async (newClientInfo?: Partial<ClientInfo>): Promise<ClientInfo> => {
    try {
      _clientInfo = await persistClientInfo(newClientInfo || _clientInfo);
    } catch (error) {
      logger.error('Error saving client info:', error);
    }

    return _clientInfo || new ClientInfo();
  },

  get: (): ClientInfo => _clientInfo || {
    id: 'default',
    createdAt: new Date().toISOString(),
  },
};

export default clientInfoStore;
