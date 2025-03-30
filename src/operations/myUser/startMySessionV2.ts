import findMyUser from './findMyUser.js';
import isCachedUserFresh from './isCachedUserFresh.js';
import { CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const startMySessionV2 = async (
  pushNotificationToken: string | null | undefined,
  returnContentStatus: boolean,
): Promise<void> => {
  try {
    logger.debug('startMySessionV2 called.', { pushNotificationToken, returnContentStatus });

    if (!libData.isInitialized()) {
      logger.error('startMySessionV2: unavailable.');
      return;
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('startMySessionV2: user not signed in.');
      return;
    }

    if (libData.isOffline()) {
      logger.error('startMySessionV2: offline.');
      return;
    }

    const startSessionResponse = await fsdata.myUser.startMySessionV2(
      pushNotificationToken,
      returnContentStatus,
    );

    if (startSessionResponse.error || !startSessionResponse.object) {
      logger.error('startMySessionV2: failed to start session.', { response: startSessionResponse });
      return;
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    clientInfo.remoteContentStatus = startSessionResponse.object;
    libData.clientInfoStore().sessionStarted();

    if (!(await isCachedUserFresh())) {
      logger.debug('startMySessionV2: loading myUser from network.');
      await findMyUser({ cachePolicy: CachePolicy.network });
    }
  } catch (error) {
    logger.error('startMySessionV2: error.', { error });
  }
};

export default startMySessionV2;
