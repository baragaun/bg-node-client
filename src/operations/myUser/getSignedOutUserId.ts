import loadUserInfo from '../../helpers/loadUserInfo.js';

const getSignedOutUserId = async (): Promise<string | null> => {
  const userInfo = loadUserInfo();

  return userInfo ? userInfo.myUserIdSignedOut : null;
};

export default getSignedOutUserId;
