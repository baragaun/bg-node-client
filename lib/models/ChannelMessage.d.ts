/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelMessage } from './BgChannelMessage.js';
export declare class ChannelMessage extends BgChannelMessage {
    constructor(attributes?: Partial<ChannelMessage>);
    static get searchFields(): string[];
}
