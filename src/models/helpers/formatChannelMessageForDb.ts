import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatChannelMessageForDb = (
  obj: Partial<ChannelMessage>,
): Partial<ChannelMessage> => {
  obj = formatDateFieldsToDb<ChannelMessage>(
    obj,
    [
      'createdAt',
      'updatedAt',
      'deletedAt',
      'pausedAt',
      'suspendedAt',
      'lockedAt',
      'archivedAt',
    ],
  );
  return obj;
}

export default formatChannelMessageForDb;
