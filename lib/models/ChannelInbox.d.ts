import { BgChannelInbox } from './BgChannelInbox.js';
export declare class ChannelInbox extends BgChannelInbox {
    assumedMentorId?: string | null;
    mm2Id?: string | null;
    syncedWithMm2At?: string | null;
    constructor(attributes?: Partial<ChannelInbox>);
    static get searchFields(): string[];
}
