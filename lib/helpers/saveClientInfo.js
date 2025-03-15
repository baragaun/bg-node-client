import db from '../db/db.js';
import { ModelType } from '../enums.js';
import loadClientInfo from './loadClientInfo.js';
const USE_LOCAL_STORAGE = false;
const saveClientInfo = async (clientInfo) => {
    const existingClientInfo = await loadClientInfo();
    if (USE_LOCAL_STORAGE &&
        typeof window !== 'undefined' &&
        window.localStorage) {
        [
            { name: 'myUserId', value: clientInfo.myUserId },
            { name: 'authToken', value: clientInfo.authToken },
            { name: 'myUserDeviceUuid', value: clientInfo.myUserDeviceUuid },
            { name: 'signedOutUserId', value: clientInfo.signedOutUserId },
        ].forEach((field) => {
            if (field.value) {
                window.localStorage.setItem(field.name, field.value);
            }
            else if (field.value === null) {
                window.localStorage.removeItem(field.name);
            }
        });
        return { ...existingClientInfo, ...clientInfo };
    }
    else {
        const newClientInfo = existingClientInfo
            ? { ...existingClientInfo, ...clientInfo }
            : clientInfo;
        if (!newClientInfo.id) {
            newClientInfo.id = 'default';
        }
        if (!newClientInfo.myUserId) {
            delete newClientInfo.myUserId;
        }
        if (!newClientInfo.authToken) {
            delete newClientInfo.authToken;
        }
        if (!newClientInfo.signedOutUserId) {
            delete newClientInfo.signedOutUserId;
        }
        const mutationResult = await db.replace(newClientInfo, ModelType.ClientInfo);
        if (mutationResult.error) {
            console.error('Error saving client info:', mutationResult.error);
            throw new Error(mutationResult.error);
        }
        return mutationResult.object;
    }
};
export default saveClientInfo;
//# sourceMappingURL=saveClientInfo.js.map