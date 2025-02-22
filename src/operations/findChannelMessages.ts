import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelMessageFilter } from '../types/ChannelMessageFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannelMessages = async (
  filter: ChannelMessageFilter,
  skip: number,
  limit: number,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (filter.id) {
      const message = await db.findById<ChannelMessage>(
        filter.id,
        ModelType.ChannelMessage,
      );

      return { object: message };
    }

    const messages = await db.findAll<ChannelMessage>(ModelType.ChannelMessage);
    let list: ChannelMessage[] = messages;

    if (!filter.channelId) {
      list = messages.filter(m => m.channelId === filter.channelId);
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
