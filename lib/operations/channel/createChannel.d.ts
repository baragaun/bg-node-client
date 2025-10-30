import { Channel } from '../../models/Channel.js';
import { ChannelListItem } from '../../types/ChannelListItem.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createChannel: (props: Partial<Channel>) => Promise<QueryResult<ChannelListItem>>;
export default createChannel;
