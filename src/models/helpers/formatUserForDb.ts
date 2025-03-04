import { User } from '../../types/models/User.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatUserForDb = (obj: Partial<User>): Partial<User> => {
  obj = formatDateFieldsToDb<User>(obj, [
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

export default formatUserForDb;
