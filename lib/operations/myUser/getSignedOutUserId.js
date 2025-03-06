import loadUserInfo from '../../helpers/loadUserInfo.js';
const getSignedOutUserId = async () => {
    const userInfo = loadUserInfo();
    return userInfo ? userInfo.myUserIdSignedOut : null;
};
export default getSignedOutUserId;
//# sourceMappingURL=getSignedOutUserId.js.map