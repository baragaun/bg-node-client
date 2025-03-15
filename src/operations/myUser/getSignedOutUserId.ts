import clientInfoStore from '../../helpers/clientInfoStore.js';

const getSignedOutUserId = async (): Promise<string | null> => {
  const info = await clientInfoStore.load();

  return info ? info.signedOutUserId : null;
};

export default getSignedOutUserId;
