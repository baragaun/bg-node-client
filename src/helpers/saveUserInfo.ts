export type SaveUserInfoArgs = {
  myUserId?: string | null;
  myUserIdSignedOut?: string | null;
  myUserDeviceUuid?: string | null;
  authToken?: string | null;
};

const saveUserInfo = ({ myUserId, myUserIdSignedOut, myUserDeviceUuid, authToken }: SaveUserInfoArgs): void => {
  if (typeof window !== 'undefined' && window.localStorage) {
    [
      { name: 'myUserId', value: myUserId },
      { name: 'myUserIdSignedOut', value: myUserIdSignedOut },
      { name: 'myUserDeviceUuid', value: myUserDeviceUuid },
      { name: 'authToken', value: authToken },
    ].forEach((field) => {
      if (field.value) {
        window.localStorage.setItem(field.name, field.value);
      } else if (field.value === null) {
        window.localStorage.removeItem(field.name);
      }
    });
  }
};

export default saveUserInfo;
