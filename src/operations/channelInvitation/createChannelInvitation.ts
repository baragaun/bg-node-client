import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannelInvitation = async (
  attributes: Partial<ChannelInvitation>,
): Promise<QueryResult<ChannelInvitation>> => {
  if (!libData.isInitialized()) {
    logger.error('createChannelInvitation: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('createChannelInvitation: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    const channel = new ChannelInvitation(attributes);

    return db.insert<ChannelInvitation>(channel);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelInvitation;
