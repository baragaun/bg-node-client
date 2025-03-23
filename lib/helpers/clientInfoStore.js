import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import persistClientInfo from './persistClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';
let _clientInfo = undefined;
const close = () => {
    _clientInfo = undefined;
};
const load = async () => {
    try {
        _clientInfo = await loadClientInfo();
    }
    catch (error) {
        logger.error('clientInfoStore.load: Error loading client info:', error);
    }
    return _clientInfo || new ClientInfo();
};
const persist = async (newClientInfo) => {
    try {
        _clientInfo = await persistClientInfo(newClientInfo || _clientInfo);
    }
    catch (error) {
        logger.error('clientInfoStore.persist: Error saving client info:', error);
    }
    return _clientInfo || new ClientInfo();
};
const get = () => _clientInfo || {
    id: 'default',
    createdAt: new Date().toISOString(),
};
const updateMyUserUpdatedAt = (myUserUpdatedAt) => {
    if (!_clientInfo.localContentStatus) {
        _clientInfo.localContentStatus = {
            id: '0',
            myUserUpdatedAt,
            createdAt: new Date().toISOString(),
        };
    }
    else {
        _clientInfo.localContentStatus.myUserUpdatedAt = myUserUpdatedAt;
    }
    if (!_clientInfo.remoteContentStatus) {
        _clientInfo.remoteContentStatus = {
            id: '0',
            myUserUpdatedAt,
            createdAt: new Date().toISOString(),
        };
    }
    else {
        _clientInfo.remoteContentStatus.myUserUpdatedAt = myUserUpdatedAt;
    }
    persist(_clientInfo).catch((error) => {
        logger.error('clientInfoStore.updateMyUserUpdatedAt: Error updating myUserUpdatedAt:', error);
    });
};
const sessionEnded = () => {
    delete _clientInfo.sessionStartedAt;
    _clientInfo.sessionEndedAt = Date.now();
    persist(_clientInfo).catch((error) => {
        logger.error('clientInfoStore.sessionEnded: Error updating myUserUpdatedAt:', error);
    });
};
const sessionStarted = () => {
    _clientInfo.sessionStartedAt = Date.now();
    delete _clientInfo.sessionEndedAt;
    persist(_clientInfo).catch((error) => {
        logger.error('clientInfoStore.sessionStarted: Error updating myUserUpdatedAt:', error);
    });
};
const clientInfoStore = {
    clearMyUserFromClientInfo,
    close,
    get,
    load,
    persist,
    updateMyUserUpdatedAt,
    sessionEnded,
    sessionStarted,
};
export default clientInfoStore;
//# sourceMappingURL=clientInfoStore.js.map