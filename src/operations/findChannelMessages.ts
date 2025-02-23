import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../types/models/ChannelMessageListFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannelMessages = async (
  filter: ChannelMessageListFilter,
  match: Partial<ChannelMessage>,
  skip: number,
  limit: number,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (Array.isArray(filter.ids) && filter.ids.length === 1) {
      return db.findById<ChannelMessage>(
        filter.ids[0],
        ModelType.ChannelMessage,
      );
    }

    const { objects: messages } = await db.findAll<ChannelMessage>(ModelType.ChannelMessage);
    let list: ChannelMessage[] = messages;

    if (filter.channelId || match.channelId) {
      list = messages.filter(m => m.channelId === filter.channelId || match.channelId);
    }

    if (skip > 0 && limit > 0) {
      list = list.slice(skip, skip + limit);
    }

    return {
      objects: list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    }
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default findChannelMessages
