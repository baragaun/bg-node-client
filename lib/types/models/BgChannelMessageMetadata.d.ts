/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export declare class BgChannelMessageMetadata extends BaseModelMetadata {
    senderUserHandle?: string | null;
    senderFirstName?: string | null;
    senderLastName?: string | null;
    senderAvatarUrl?: string | null;
    constructor(attributes?: Partial<BgChannelMessageMetadata>);
}
