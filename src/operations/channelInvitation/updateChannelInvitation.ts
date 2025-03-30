import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
): Promise<QueryResult<ChannelInvitation>> => {
  if (!libData.isInitialized()) {
    logger.error('updateChannelInvitation: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('updateChannelInvitation: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    return db.update<ChannelInvitation>(changes, ModelType.ChannelInvitation);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannelInvitation;
