const loadUserInfo = () => {
    const userInfo = {
        myUserId: undefined,
        myUserIdSignedOut: undefined,
        myUserDeviceUuid: undefined,
        authToken: undefined,
    };
    if (typeof window !== 'undefined' && window.localStorage) {
        userInfo.myUserId = window.localStorage.getItem('myUserId');
        userInfo.myUserIdSignedOut = window.localStorage.getItem('myUserIdSignedOut');
        userInfo.myUserDeviceUuid = window.localStorage.getItem('myUserDeviceUuid');
        userInfo.authToken = window.localStorage.getItem('authToken');
    }
    return userInfo;
};
export default loadUserInfo;
//# sourceMappingURL=loadUserInfo.js.map