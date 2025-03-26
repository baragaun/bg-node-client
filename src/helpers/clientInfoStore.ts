import clearMyUserFromClientInfo from './clearMyUserFromClientInfo.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import persistClientInfo from './persistClientInfo.js';
import { ClientInfo } from '../models/ClientInfo.js';

let _clientInfo: ClientInfo | undefined = undefined;

const close = (): void => {
  _clientInfo = undefined;
};

const load = async (): Promise<ClientInfo> => {
  try {
    _clientInfo = await loadClientInfo();
  } catch (error) {
    logger.error('clientInfoStore.load: Error loading client info:', error);
  }

  return _clientInfo || new ClientInfo();
};

const persist = async (newClientInfo?: Partial<ClientInfo>): Promise<ClientInfo> => {
  try {
    _clientInfo = await persistClientInfo(newClientInfo || _clientInfo);
  } catch (error) {
    logger.error('clientInfoStore.persist: Error saving client info:', error);
  }

  return _clientInfo || new ClientInfo();
};

const get = (): ClientInfo => _clientInfo || new ClientInfo({
  id: 'default',
  createdAt: new Date().toISOString(),
});

const updateMyUserUpdatedAt = (myUserUpdatedAt: number): void => {
  if (!_clientInfo.localContentStatus) {
    _clientInfo.localContentStatus = {
      id: '0',
      myUserUpdatedAt,
      createdAt: new Date().toISOString(),
    };
  } else {
    _clientInfo.localContentStatus.myUserUpdatedAt = myUserUpdatedAt;
  }
  if (!_clientInfo.remoteContentStatus) {
    _clientInfo.remoteContentStatus = {
      id: '0',
      myUserUpdatedAt,
      createdAt: new Date().toISOString(),
    };
  } else {
    _clientInfo.remoteContentStatus.myUserUpdatedAt = myUserUpdatedAt;
  }
  persist(_clientInfo).catch((error) => {
    logger.error('clientInfoStore.updateMyUserUpdatedAt: Error updating myUserUpdatedAt:', error);
  });
};

const sessionEnded = (): void => {
  delete _clientInfo.sessionStartedAt;
  _clientInfo.sessionEndedAt = Date.now();
  persist(_clientInfo).catch((error) => {
    logger.error('clientInfoStore.sessionEnded: Error updating myUserUpdatedAt:', error);
  });
};

const sessionStarted = (): void => {
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
