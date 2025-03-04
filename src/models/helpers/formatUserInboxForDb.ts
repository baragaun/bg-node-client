import { UserInbox } from '../../types/models/UserInbox.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatUserInboxForDb = (obj: Partial<UserInbox>): Partial<UserInbox> => {
  obj = formatDateFieldsToDb<UserInbox>(obj, [
    'createdAt',
    'updatedAt',
    'deletedAt',
    'pausedAt',
    'suspendedAt',
    'lockedAt',
    'archivedAt',
  ]);
  return obj;
};

export default formatUserInboxForDb;
