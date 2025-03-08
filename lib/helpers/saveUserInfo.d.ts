export type SaveUserInfoArgs = {
    myUserId?: string | null;
    myUserIdSignedOut?: string | null;
    myUserDeviceUuid?: string | null;
    authToken?: string | null;
};
declare const saveUserInfo: ({ myUserId, myUserIdSignedOut, myUserDeviceUuid, authToken, }: SaveUserInfoArgs) => void;
export default saveUserInfo;
