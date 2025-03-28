import db from '../db/db.js';
import { ClientInfoStoreType, ModelType } from '../enums.js';
import libData from './libData.js';
import logger from './logger.js';
import { ClientInfo } from '../models/ClientInfo.js';
// const defaultClientInfo: ClientInfo = { id: 'default', createdAt: new Date().toISOString() };
const loadClientInfo = async () => {
    const config = libData.config();
    if (!config) {
        logger.error('loadClientInfo: no config.');
        return null;
    }
    const persistType = config.clientInfoStore?.type;
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Delegated:
    if ((!persistType || persistType === ClientInfoStoreType.delegated) &&
        config.clientInfoStore?.delegate?.load) {
        return config.clientInfoStore.delegate.load();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // LocalStorage:
    if (persistType === ClientInfoStoreType.localStorage &&
        (typeof window === 'undefined' || !window.localStorage)) {
        const clientInfo = new ClientInfo({
            id: 'default',
            myUserId: undefined,
            authToken: undefined,
            myUserDeviceUuid: undefined,
            signedOutUserId: undefined,
            createdAt: new Date().toISOString(),
        });
        clientInfo.myUserId = window.localStorage.getItem('myUserId');
        clientInfo.authToken = window.localStorage.getItem('authToken');
        clientInfo.myUserDeviceUuid =
            window.localStorage.getItem('myUserDeviceUuid');
        clientInfo.signedOutUserId = window.localStorage.getItem('signedOutUserId');
        return clientInfo;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // DB:
    const queryResult = await db.findById('default', ModelType.ClientInfo);
    if (queryResult && queryResult.object) {
        return new ClientInfo(queryResult.object);
    }
    return null;
};
export default loadClientInfo;
//# sourceMappingURL=loadClientInfo.js.map