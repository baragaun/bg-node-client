import db from '../db/db.js';
import { ClientInfoStoreType, ModelType } from '../enums.js';
import libData from './libData.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import { ClientInfo } from '../models/ClientInfo.js';

const persistClientInfo = async (
  clientInfo: Partial<ClientInfo>,
): Promise<ClientInfo> => {
  const config = libData.config();
  const persistType = config.clientInfoStore?.type;
  const existingClientInfo = await loadClientInfo();
  const newClientInfo: ClientInfo = new ClientInfo({
    ...clientInfo,
    id: 'default',
    updatedAt: new Date().toISOString(),
    createdAt: existingClientInfo?.createdAt || new Date().toISOString(),
  });

  if (
    !newClientInfo.myUserId &&
    clientInfo.myUserId !== null &&
    existingClientInfo?.myUserId
  ) {
    newClientInfo.myUserId = existingClientInfo.myUserId;
  }

  if (!newClientInfo.myUserDeviceUuid) {
    newClientInfo.myUserDeviceUuid = existingClientInfo?.myUserDeviceUuid ||
      ClientInfo.createDeviceUuid();
  }

  if (
    !newClientInfo.authToken &&
    clientInfo.authToken !== null &&
    existingClientInfo?.authToken
  ) {
    newClientInfo.authToken = existingClientInfo.authToken;
  }

  if (
    !newClientInfo.signedOutUserId &&
    clientInfo.signedOutUserId !== null &&
    existingClientInfo?.signedOutUserId
  ) {
    newClientInfo.signedOutUserId = existingClientInfo.signedOutUserId;
  }

  if (
    !newClientInfo.localContentStatus &&
    clientInfo.localContentStatus !== null &&
    existingClientInfo?.localContentStatus
  ) {
    newClientInfo.localContentStatus = existingClientInfo.localContentStatus;
  }

  if (
    !newClientInfo.remoteContentStatus &&
    clientInfo.remoteContentStatus !== null &&
    existingClientInfo?.remoteContentStatus
  ) {
    newClientInfo.remoteContentStatus = existingClientInfo.remoteContentStatus;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // LocalStorage:
  if (
    persistType === ClientInfoStoreType.localStorage &&
    (typeof window === 'undefined' || !window.localStorage)
  ) {
    [
      { name: 'myUserId', value: clientInfo.myUserId },
      { name: 'authToken', value: clientInfo.authToken },
      { name: 'myUserDeviceUuid', value: clientInfo.myUserDeviceUuid },
      { name: 'signedOutUserId', value: clientInfo.signedOutUserId },
      { name: 'sessionEndedAt', value: clientInfo.sessionEndedAt.toString() },
      { name: 'sessionStartedAt', value: clientInfo.sessionStartedAt.toString() },
    ].forEach((field) => {
      if (field.value === null) {
        window.localStorage.removeItem(field.name);
      } else if (field.value) {
        window.localStorage.setItem(field.name, field.value);
      }
    });

    return new ClientInfo({ ...existingClientInfo, ...clientInfo });
  }

  // Removing empty props:
  if (!newClientInfo.myUserId) {
    delete newClientInfo.myUserId;
  }

  if (!newClientInfo.authToken) {
    delete newClientInfo.authToken;
  }

  if (!newClientInfo.signedOutUserId) {
    delete newClientInfo.signedOutUserId;
  }

  if (!newClientInfo.localContentStatus) {
    delete newClientInfo.localContentStatus;
  }

  if (!newClientInfo.remoteContentStatus) {
    delete newClientInfo.remoteContentStatus;
  }

  if (!newClientInfo.sessionEndedAt) {
    delete newClientInfo.sessionEndedAt;
  }

  if (!newClientInfo.sessionStartedAt) {
    delete newClientInfo.sessionStartedAt;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Delegated:
  if (
    (!persistType || persistType === ClientInfoStoreType.delegated) &&
    config.clientInfoStore?.delegate?.persist
  ) {
    return config.clientInfoStore.delegate.persist(newClientInfo);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // DB:
  // console.log('>>>>>>>>>Replacing ClientInfo', { newClientInfo });
  const mutationResult = await db.replace<ClientInfo>(
    newClientInfo,
    ModelType.ClientInfo,
  );

  if (mutationResult.error) {
    logger.error('Error saving client info:', mutationResult.error);
    throw new Error(mutationResult.error);
  }

  return new ClientInfo(mutationResult.object);
};

export default persistClientInfo;
