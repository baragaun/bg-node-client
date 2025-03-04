import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../types/models/ChannelParticipantListFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannelParticipants = async (
  filter: ChannelParticipantListFilter,
  match: Partial<ChannelParticipant>,
  skip: number,
  limit: number,
): Promise<QueryResult<ChannelParticipant>> => {
  try {
    if (Array.isArray(filter.ids) && filter.ids.length === 1) {
      return db.findById<ChannelParticipant>(filter.ids[0], ModelType.ChannelParticipant);
    }

    const { objects: participants } = await db.findAll<ChannelParticipant>(ModelType.ChannelParticipant);
    let list: ChannelParticipant[] = participants;

    if (filter.channelId || match.channelId) {
      list = participants.filter((m) => m.channelId === filter.channelId || match.channelId);
    }

    if (skip > 0 && limit > 0) {
      list = list.slice(skip, skip + limit);
    }

    return {
      objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannelParticipants;
