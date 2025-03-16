import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import saveClientInfo from './saveClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';
let _clientInfo = undefined;
const clientInfoStore = {
    clearMyUserFromClientInfo,
    load: async () => {
        try {
            _clientInfo = await loadClientInfo();
        }
        catch (error) {
            logger.error('Error loading client info:', error);
        }
        return _clientInfo || new ClientInfo();
    },
    save: async (newClientInfo) => {
        try {
            _clientInfo = await saveClientInfo(newClientInfo);
        }
        catch (error) {
            logger.error('Error saving client info:', error);
        }
        return _clientInfo || new ClientInfo();
    },
    get: () => _clientInfo,
};
export default clientInfoStore;
//# sourceMappingURL=clientInfoStore.js.map