import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';

const getSignedOutUserId = async (): Promise<string | null> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const info = await clientInfoStore.load();

  return info ? info.signedOutUserId : null;
};

export default getSignedOutUserId;
