import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';

const isChannelArchivedForMe = (channel: Channel): boolean => {
  if (!libData.isInitialized()) {
    logger.error('isChannelArchivedForMe: unavailable');
    return false;
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('isChannelArchivedForMe: unauthorized');
    return false;
  }

  const myUserId = libData.clientInfoStore().myUserId;

  if (
    !channel ||
    !Array.isArray(channel.statuses) ||
    channel.statuses.length < 1 ||
    !myUserId
  ) {
    return false;
  }

  const status = channel.statuses.find(s => s.userId === myUserId);

  return !!status?.archivedAt;
};

export default isChannelArchivedForMe;
