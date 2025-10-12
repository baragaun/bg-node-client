import { IncludeFilterOption } from '../enums.js';
export declare class ChannelMessageScope {
    channelMustHaveMessages?: boolean | null;
    channelHaveUnseenMessages?: IncludeFilterOption | null;
    channelInvitationMustBeAccepted?: boolean | null;
    includeArchivedMessages?: IncludeFilterOption | null;
    includeSystemMessages?: IncludeFilterOption | null;
    constructor(attributes?: Partial<ChannelMessageScope>);
}
