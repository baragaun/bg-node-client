/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelMessage } from './BgChannelMessage.js';
export declare class ChannelMessage extends BgChannelMessage {
    mm2ConversationId?: string | null;
    mm2Id?: string | null;
    syncedWithMm2At?: Date | null;
    constructor(attributes?: Partial<ChannelMessage>);
}
