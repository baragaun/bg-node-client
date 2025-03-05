export type UserInfo = {
    myUserId: string | null | undefined;
    myUserDeviceUuid: string | null | undefined;
    authToken: string | null | undefined;
};
declare const loadUserInfo: () => UserInfo;
export default loadUserInfo;
