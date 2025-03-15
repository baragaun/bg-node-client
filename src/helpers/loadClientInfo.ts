import db from '../db/db.js';
import { ModelType } from '../enums.js';
import { ClientInfo } from '../types/models/ClientInfo.js';

const loadClientInfo = async (): Promise<ClientInfo> => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const clientInfo: ClientInfo = {
      id: 'default',
      myUserId: undefined,
      authToken: undefined,
      myUserDeviceUuid: undefined,
      signedOutUserId: undefined,
      createdAt: new Date().toISOString(),
    };

    clientInfo.myUserId = window.localStorage.getItem('myUserId');
    clientInfo.authToken = window.localStorage.getItem('authToken');
    clientInfo.myUserDeviceUuid =
      window.localStorage.getItem('myUserDeviceUuid');
    clientInfo.signedOutUserId = window.localStorage.getItem('signedOutUserId');

    return clientInfo;
  } else {
    const queryResult = await db.findById<ClientInfo>(
      'default',
      ModelType.ClientInfo,
    );

    if (queryResult && queryResult.object) {
      return queryResult.object;
    }

    return { id: 'default', createdAt: new Date().toISOString() };
  }
};

export default loadClientInfo;
