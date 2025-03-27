import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyChannels = async (
  filter: ChannelListFilter,
  match: Partial<Channel>,
  skip: number,
  limit: number,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  //------------------------------------------------------------------------------------------------
  // Retrieve from local cache
  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<Channel>(filter.ids[0], ModelType.Channel);
      }

      const { objects: channels } = await db.findAll<Channel>(
        ModelType.Channel,
      );
      let list: Channel[] = channels;

      if (filter.userId) {
        list = channels.filter((channel) => {
          if (!Array.isArray(channel.userIds)) {
            return { error: 'channel-missing-userid' };
          }

          return channel.userIds.includes(filter.userId as string);
        });
      }

      if (match.name) {
        list = channels.filter(
          (c) => c.name && c.name.localeCompare(match.name as string) === 0,
        );
      }

      if (skip > 0 && limit > 0) {
        list = list.slice(skip, skip + limit);
      }

      return {
        objects: list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  //------------------------------------------------------------------------------------------------
  // Retrieve from network
  const options: FindObjectsOptions = {
    skip,
    limit,
  }
  const result = await fsdata.channel.findChannels(
    filter,
    match,
    options,
  );

  if (Array.isArray(result.objects) && result.objects.length > 0) {
    for (const channel of result.objects) {
      await db.upsert<Channel>(channel, ModelType.Channel);
    }
  }

  return result;
};

export default findMyChannels;
