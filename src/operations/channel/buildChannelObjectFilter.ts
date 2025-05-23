import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';

const buildChannelObjectFilter = (
  filter: ChannelListFilter | null | undefined,
  match: Partial<Channel> | null | undefined,
): MangoQueryTypes<Channel> => {
  if (!filter) {
    return match || {};
  }

  const parts: MangoQueryTypes<Channel>[] = match && Object.keys(match).length > 0
    ? [match]
    : [];

  if (parts.length < 2) {
    return parts[0] || {};
  }

  return { $and: parts };
};

export default buildChannelObjectFilter;
