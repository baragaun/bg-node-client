const saveUserInfo = (
  myUserId: string | null | undefined,
  myUserDeviceUuid: string | null | undefined,
  authToken: string | null | undefined,
): void => {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (myUserId) {
      window.localStorage.setItem('myUserId', myUserId);
    }

    if (myUserDeviceUuid) {
      window.localStorage.setItem('myUserDeviceUuid', myUserDeviceUuid);
    }

    if (authToken) {
      window.localStorage.setItem('authToken', authToken);
    }
  }
};

export default saveUserInfo;
