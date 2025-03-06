const saveUserInfo = (
  myUserId: string | null | undefined,
  myUserDeviceUuid: string | null | undefined,
  authToken: string | null | undefined,
): void => {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (myUserId) {
      window.localStorage.setItem('myUserId', myUserId);
    } else if (myUserId === null) {
      window.localStorage.removeItem('myUserId');
    }

    if (myUserDeviceUuid) {
      window.localStorage.setItem('myUserDeviceUuid', myUserDeviceUuid);
    } else if (myUserDeviceUuid === null) {
      window.localStorage.removeItem('myUserDeviceUuid');
    }

    if (authToken) {
      window.localStorage.setItem('authToken', authToken);
    } else if (authToken === null) {
      window.localStorage.removeItem('authToken');
    }
  }
};

export default saveUserInfo;
