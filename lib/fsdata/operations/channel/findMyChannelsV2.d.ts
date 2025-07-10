import { ChannelListItem } from '../../../types/ChannelListItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyChannelsV2: (participantLimit: number | undefined, addLatestMessage: boolean | undefined, options: FindObjectsOptions) => Promise<QueryResult<ChannelListItem>>;
export default findMyChannelsV2;
