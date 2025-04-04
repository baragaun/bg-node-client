import isChannelArchivedForMe from './isChannelArchivedForMe.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyChannels = async (
  filter: ChannelListFilter,
  match: Partial<Channel>,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('findMyChannels: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('findMyChannels: unauthorized');
    return { error: 'unauthorized' };
  }

  const response = await findMyChannels(
    filter,
    match,
    options,
    queryOptions,
  );

  if (!Array.isArray(response.objects) || response.objects.length < 1) {
    return response;
  }

  response.objects = response.objects.filter(c => isChannelArchivedForMe(c));

  return response;
};

export default findMyChannels;
