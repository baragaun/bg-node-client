import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../types/models/ChannelInvitationListFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannelInvitations = async (
  filter: ChannelInvitationListFilter,
  match: Partial<ChannelInvitation>,
  skip: number,
  limit: number,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (Array.isArray(filter.ids) && filter.ids.length === 1) {
      return db.findById<ChannelInvitation>(
        filter.ids[0],
        ModelType.ChannelInvitation,
      );
    }

    const { objects: messages } = await db.findAll<ChannelInvitation>(ModelType.ChannelInvitation);
    let list: ChannelInvitation[] = messages;

    if (!match.channelId) {
      list = messages.filter(m => m.channelId === match.channelId);
    }

    if (skip > 0 && limit > 0) {
      list = list.slice(skip, skip + limit);
    }

    return {
      objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default findChannelInvitations
