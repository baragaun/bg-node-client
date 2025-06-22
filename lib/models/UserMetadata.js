import { ChannelsUserMetadata } from './ChannelsUserMetadata.js';
import { SidUserMetadata } from './SidUserMetadata.js';
export class UserMetadata extends SidUserMetadata {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    channelsMetadata = new ChannelsUserMetadata();
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.channelsMetadata !== undefined) {
                this.channelsMetadata = attributes.channelsMetadata;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['firstName', 'lastName', 'userHandle', 'email'];
    }
}
//# sourceMappingURL=UserMetadata.js.map