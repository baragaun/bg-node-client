import { Channel } from '../../types/models/Channel.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatChannelForDb = (
  obj: Partial<Channel>,
): Partial<Channel> => {
  obj = formatDateFieldsToDb<Channel>(
    obj,
    [
      'archivedAt',
      'createdAt',
      'deletedAt',
      'lockedAt',
      'pausedAt',
      'suspendedAt',
      'updatedAt',
    ],
  );
  delete obj.archivedAt;
  return obj;
}

export default formatChannelForDb;
