import { BgChannel } from './BgChannel.js';
export class Channel extends BgChannel {
    assumedMentorId;
    mm2Id;
    syncedWithMm2At;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.assumedMentorId) {
                this.assumedMentorId = attributes.assumedMentorId;
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
//# sourceMappingURL=Channel.js.map