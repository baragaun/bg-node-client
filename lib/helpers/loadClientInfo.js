import db from '../db/db.js';
import { ModelType } from '../enums.js';
const loadClientInfo = async () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const clientInfo = {
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
    }
    else {
        const queryResult = await db.findById('default', ModelType.ClientInfo);
        if (queryResult && queryResult.object) {
            return queryResult.object;
        }
        return { id: 'default', createdAt: new Date().toISOString() };
    }
};
export default loadClientInfo;
//# sourceMappingURL=loadClientInfo.js.map