import { BaseListFilter } from './BaseListFilter.js';
export class BgChannelParticipantListFilter extends BaseListFilter {
    channelIds;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.channelIds) {
                this.channelIds = attributes.channelIds;
            }
        }
    }
}
//# sourceMappingURL=BgChannelParticipantListFilter.js.map
