import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
declare const buildChannelObjectFilter: (filter: ChannelListFilter | null | undefined, match: Partial<Channel> | null | undefined) => MangoQueryTypes<Channel>;
export default buildChannelObjectFilter;
