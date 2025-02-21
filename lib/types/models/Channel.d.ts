import { BgChannel } from './BgChannel.js';
export declare class Channel extends BgChannel {
    assumedMentorId?: string | null;
    mm2Id?: string | null;
    syncedWithMm2At?: Date | null;
    constructor(attributes?: Partial<Channel>);
}
