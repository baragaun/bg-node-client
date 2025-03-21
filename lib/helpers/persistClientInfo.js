import db from '../db/db.js';
import { ClientInfoStoreType, ModelType } from '../enums.js';
import libData from './libData.js';
import loadClientInfo from './loadClientInfo.js';
import logger from './logger.js';
import { ClientInfo } from '../types/models/ClientInfo.js';
const persistClientInfo = async (clientInfo) => {
    const config = libData.config();
    const persistType = config.clientInfoStore?.type;
    const existingClientInfo = await loadClientInfo();
    const newClientInfo = {
        ...clientInfo,
        id: 'default',
        updatedAt: new Date().toISOString(),
        createdAt: existingClientInfo?.createdAt || new Date().toISOString(),
    };
    if (!newClientInfo.myUserId &&
        newClientInfo.myUserId !== null &&
        existingClientInfo?.myUserId) {
        newClientInfo.myUserId = existingClientInfo.myUserId;
    }
    if (!newClientInfo.myUserDeviceUuid) {
        newClientInfo.myUserDeviceUuid = existingClientInfo?.myUserDeviceUuid ||
            ClientInfo.createDeviceUuid();
    }
    if (!newClientInfo.authToken &&
        newClientInfo.authToken !== null &&
        existingClientInfo?.authToken) {
        newClientInfo.authToken = existingClientInfo.authToken;
    }
    if (!newClientInfo.signedOutUserId &&
        newClientInfo.signedOutUserId !== null &&
        existingClientInfo?.signedOutUserId) {
        newClientInfo.signedOutUserId = existingClientInfo.signedOutUserId;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // LocalStorage:
    if (persistType === ClientInfoStoreType.localStorage &&
        (typeof window === 'undefined' || !window.localStorage)) {
        [
            { name: 'myUserId', value: clientInfo.myUserId },
            { name: 'authToken', value: clientInfo.authToken },
            { name: 'myUserDeviceUuid', value: clientInfo.myUserDeviceUuid },
            { name: 'signedOutUserId', value: clientInfo.signedOutUserId },
        ].forEach((field) => {
            if (field.value === null) {
                window.localStorage.removeItem(field.name);
            }
            else if (field.value) {
                window.localStorage.setItem(field.name, field.value);
            }
        });
        return { ...existingClientInfo, ...clientInfo };
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
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Delegated:
    if ((!persistType || persistType === ClientInfoStoreType.delegated) &&
        config.clientInfoStore?.delegate?.persist) {
        return config.clientInfoStore.delegate.persist(newClientInfo);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // DB:
    const mutationResult = await db.replace(newClientInfo, ModelType.ClientInfo);
    if (mutationResult.error) {
        logger.error('Error saving client info:', mutationResult.error);
        throw new Error(mutationResult.error);
    }
    return mutationResult.object;
};
export default persistClientInfo;
//# sourceMappingURL=persistClientInfo.js.map