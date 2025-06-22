import { BaseListFilter } from './BaseListFilter.js';
export class BgChannelParticipantListFilter extends BaseListFilter {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    channelIds;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.channelIds) {
                this.channelIds = attributes.channelIds;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=BgChannelParticipantListFilter.js.map