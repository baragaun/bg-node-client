import clientInfoStore from '../../helpers/clientInfoStore.js';
const getSignedOutUserId = async () => {
    const info = await clientInfoStore.load();
    return info ? info.signedOutUserId : null;
};
export default getSignedOutUserId;
//# sourceMappingURL=getSignedOutUserId.js.map