/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannel } from './BgChannel.js';
import { ChannelMessage } from './ChannelMessage.js';
export declare class Channel extends BgChannel {
    assumedMentorId?: string | null;
    mm2Id?: string | null;
    syncedWithMm2At?: Date | null;
    messages: ChannelMessage[];
    constructor(attributes?: Partial<Channel>);
}
