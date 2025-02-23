import { BgChannelInvitation } from './BgChannelInvitation.js';
export class ChannelInvitation extends BgChannelInvitation {
    mm2ConversationId;
    mm2Id;
    syncedWithMm2At;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.mm2ConversationId) {
                this.mm2ConversationId = attributes.mm2ConversationId;
            }
            if (attributes.mm2Id) {
                this.mm2Id = attributes.mm2Id;
            }
            if (attributes.syncedWithMm2At) {
                if (attributes.syncedWithMm2At instanceof Date) {
                    this.syncedWithMm2At = attributes.syncedWithMm2At;
                }
                else {
                    this.syncedWithMm2At = new Date(attributes.syncedWithMm2At);
                }
            }
        }
    }
}
//# sourceMappingURL=ChannelInvitation.js.map