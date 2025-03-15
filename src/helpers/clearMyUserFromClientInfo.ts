import db from '../db/db.js';
import { ModelType } from '../enums.js';
import loadClientInfo from './loadClientInfo.js';
import { ClientInfo } from '../types/models/ClientInfo.js';

const USE_LOCAL_STORAGE = false;

const clearMyUserFromClientInfo = async (
  signedOutUserId?: string,
): Promise<ClientInfo> => {
  if (
    USE_LOCAL_STORAGE &&
    typeof window !== 'undefined' &&
    window.localStorage
  ) {
    window.localStorage.removeItem('myUserId');
    window.localStorage.removeItem('authToken');

    if (signedOutUserId) {
      window.localStorage.setItem('signedOutUserId', signedOutUserId);
    }

    return loadClientInfo();
  } else {
    const existingClientInfo = (await loadClientInfo()) || new ClientInfo();
    delete existingClientInfo.myUserId;
    delete existingClientInfo.authToken;

    if (signedOutUserId) {
      existingClientInfo.signedOutUserId = signedOutUserId;
    }

    const mutationResult = await db.replace<ClientInfo>(
      existingClientInfo,
      ModelType.ClientInfo,
    );

    if (mutationResult.error) {
      console.error('Error saving client info:', mutationResult.error);
      throw new Error(mutationResult.error);
    }

    return mutationResult.object;
  }
};

export default clearMyUserFromClientInfo;
