import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import persistClientInfo from './persistClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';
let _clientInfo = undefined;
const clientInfoStore = {
    clearMyUserFromClientInfo,
    close: () => {
        _clientInfo = undefined;
    },
    load: async () => {
        try {
            _clientInfo = await loadClientInfo();
        }
        catch (error) {
            logger.error('Error loading client info:', error);
        }
        return _clientInfo || new ClientInfo();
    },
    persist: async (newClientInfo) => {
        try {
            _clientInfo = await persistClientInfo(newClientInfo || _clientInfo);
        }
        catch (error) {
            logger.error('Error saving client info:', error);
        }
        return _clientInfo || new ClientInfo();
    },
    get: () => _clientInfo || {
        id: 'default',
        createdAt: new Date().toISOString(),
    },
};
export default clientInfoStore;
//# sourceMappingURL=clientInfoStore.js.map