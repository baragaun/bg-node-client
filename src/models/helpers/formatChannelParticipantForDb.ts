import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import formatDateFieldsToDb from './formatDateFieldsToDb.js';

const formatChannelParticipantForDb = (
  obj: Partial<ChannelParticipant>,
): Partial<ChannelParticipant> => {
  obj = formatDateFieldsToDb<ChannelParticipant>(
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

export default formatChannelParticipantForDb;
