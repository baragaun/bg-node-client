import { BaseListFilter } from './BaseListFilter.js';
export class BgChannelMessageListFilter extends BaseListFilter {
    channelId;
    receiverUserId;
    replyToMessageId;
    includeChannelMessageType;
    received;
    seen;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.receiverUserId) {
                this.receiverUserId = attributes.receiverUserId;
            }
            if (attributes.replyToMessageId) {
                this.replyToMessageId = attributes.replyToMessageId;
            }
            if (attributes.includeChannelMessageType) {
                this.includeChannelMessageType = attributes.includeChannelMessageType;
            }
            if (attributes.received === true || attributes.received === false) {
                this.received = attributes.received;
            }
            if (attributes.seen === true || attributes.seen === false) {
                this.seen = attributes.seen;
            }
        }
    }
}
//# sourceMappingURL=BgChannelMessageListFilter.js.map