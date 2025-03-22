import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
const getSignedOutUserId = async () => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const info = await clientInfoStore.load();
    return info ? info.signedOutUserId : null;
};
export default getSignedOutUserId;
//# sourceMappingURL=getSignedOutUserId.js.map