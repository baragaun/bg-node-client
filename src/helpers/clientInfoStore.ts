import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import saveClientInfo from './saveClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';

let _clientInfo: ClientInfo | undefined = undefined;

const clientInfoStore = {
  clearMyUserFromClientInfo,

  load: async (): Promise<ClientInfo> => {
    try {
      _clientInfo = await loadClientInfo();
    } catch (error) {
      logger.error('Error loading client info:', error);
    }

    return _clientInfo || new ClientInfo();
  },

  save: async (newClientInfo: Partial<ClientInfo>): Promise<ClientInfo> => {
    try {
      _clientInfo = await saveClientInfo(newClientInfo);
    } catch (error) {
      logger.error('Error saving client info:', error);
    }

    return _clientInfo || new ClientInfo();
  },

  get: (): ClientInfo | undefined => _clientInfo,
};

export default clientInfoStore;
