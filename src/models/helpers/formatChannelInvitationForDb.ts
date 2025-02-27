import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatChannelInvitationForDb = (
  obj: Partial<ChannelInvitation>,
): Partial<ChannelInvitation> => {
  obj = formatDateFieldsToDb<ChannelInvitation>(
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

export default formatChannelInvitationForDb;
