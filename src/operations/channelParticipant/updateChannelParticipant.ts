import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateChannelParticipant = async (
  changes: Partial<ChannelParticipant>,
): Promise<QueryResult<ChannelParticipant>> => {
  if (!libData.isInitialized()) {
    logger.error('updateChannelParticipant: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('updateChannelParticipant: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    return db.update<ChannelParticipant>(changes, ModelType.ChannelParticipant);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannelParticipant;
