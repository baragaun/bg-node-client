import { Channel } from './models/Channel';
import { ChannelMessage } from './models/ChannelMessage';
import { MutateChannelResult } from './MutateChannelResult';
/**
 * Interface representing a listener for channel events.
 */
export interface ChannelsListener {
    id: string;
    channelId?: string;
    channelMessageId?: string;
    onChannelCreated?: (result: MutateChannelResult<Channel>) => void;
    onChannelUpdated?: (result: MutateChannelResult<Channel>) => void;
    onChannelDeleted?: (result: MutateChannelResult<Channel>) => void;
    onChannelMessageCreated?: (result: MutateChannelResult<ChannelMessage>) => void;
    onChannelMessageUpdated?: (result: MutateChannelResult<ChannelMessage>) => void;
    onChannelMessageDeleted?: (result: MutateChannelResult<ChannelMessage>) => void;
}
