/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { BgLatestUnseenChannelMessageInfo } from './BgLatestUnseenChannelMessageInfo.js';
export declare class BgChannelMetadata extends BaseModelMetadata {
    unseenMessageInfo?: BgLatestUnseenChannelMessageInfo[] | null;
    constructor(attributes?: Partial<BgChannelMetadata>);
}
