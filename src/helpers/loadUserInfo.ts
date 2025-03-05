export type UserInfo = {
  myUserId: string | null | undefined;
  myUserDeviceUuid: string | null | undefined;
  authToken: string | null | undefined;
};

const loadUserInfo = (): UserInfo => {
  const userInfo: UserInfo = {
    myUserId: undefined,
    myUserDeviceUuid: undefined,
    authToken: undefined,
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    userInfo.myUserId = window.localStorage.getItem('myUserId');
    userInfo.myUserDeviceUuid = window.localStorage.getItem('myUserDeviceUuid');
    userInfo.authToken = window.localStorage.getItem('authToken');
  }

  return userInfo;
};

export default loadUserInfo;
