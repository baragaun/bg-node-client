import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter } from '../../../models/ChannelListFilter.js';
import { MangoQueryTypes } from '../../../types/mangoQuery.js';
declare const getChannelSelectorParts: (filter: ChannelListFilter | null | undefined) => MangoQueryTypes<Channel>[];
export default getChannelSelectorParts;
