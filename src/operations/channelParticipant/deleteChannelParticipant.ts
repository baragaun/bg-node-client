import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryResult } from '../../types/QueryResult.js';

const deleteChannelParticipant = async (
  id: string,
): Promise<QueryResult<ChannelParticipant>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('deleteChannelParticipant: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('deleteChannelParticipant: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (!allowNetwork) {
      return db.delete(id, ModelType.ChannelParticipant);
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.delete };
    }

    return {
      operation: MutationType.delete,
      error: 'not-implemented',
    };
  } catch (error) {
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteChannelParticipant;
