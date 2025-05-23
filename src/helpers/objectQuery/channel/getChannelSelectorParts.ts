import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter } from '../../../models/ChannelListFilter.js';
import { MangoQueryTypes } from '../../../types/mangoQuery.js';
import libData from '../../libData.js';

let enableGroupChannels: boolean | undefined = undefined;

const getChannelSelectorParts = (
  filter: ChannelListFilter | null | undefined,
): MangoQueryTypes<Channel>[] => {
  if (!filter) {
    return [];
  }

  if (enableGroupChannels === undefined) {
    const config = libData.getConfig();
    enableGroupChannels = config.enableGroupChannels ?? false;
  }

  const parts: MangoQueryTypes<Channel>[] = [];

  if (filter?.userId) {
    if (enableGroupChannels) {
      parts.push({ userIds: { $elemMatch: { $eq: filter.userId } } });
    } else {
      parts.push({
        $or: [
          { createdBy: filter.userId },
          { otherUserId: filter.userId },
        ],
      });
    }
  }

  if (Array.isArray(filter.userIds) && filter.userIds.length > 2) {
    if (enableGroupChannels) {
      parts.push({ userIds: { $elemMatch: { $eq: filter.userIds } } });
    } else {
      parts.push({
        $or: [
          { createdBy: { $in: filter.userIds } },
          { otherUserId: { $in: filter.userIds } },
        ],
      });
    }
  }

  return parts;
};

export default getChannelSelectorParts;
