import loadClientInfo from './loadClientInfo.js';
import persistClientInfo from './persistClientInfo.js';
const clearMyUserFromClientInfo = async (signedOutUserId) => {
    const clientInfo = await loadClientInfo();
    signedOutUserId = signedOutUserId || clientInfo.signedOutUserId;
    clientInfo.myUserId = null;
    clientInfo.authToken = null;
    clientInfo.signedOutUserId = signedOutUserId || clientInfo.signedOutUserId;
    return persistClientInfo(clientInfo);
};
export default clearMyUserFromClientInfo;
//# sourceMappingURL=clearMyUserFromClientInfo.js.map