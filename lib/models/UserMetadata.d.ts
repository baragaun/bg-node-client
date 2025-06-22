import { ChannelsUserMetadata } from './ChannelsUserMetadata.js';
import { SidUserMetadata } from './SidUserMetadata.js';
export declare class UserMetadata extends SidUserMetadata {
    channelsMetadata: ChannelsUserMetadata;
    constructor(attributes?: Partial<UserMetadata>);
    static get searchFields(): string[];
}
