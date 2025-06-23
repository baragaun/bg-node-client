/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelsUserMetadata } from './BgChannelsUserMetadata.js';
export class ChannelsUserMetadata extends BgChannelsUserMetadata {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    mentoringSessionCount = 0;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.mentoringSessionCount === 0 ||
                (attributes.mentoringSessionCount &&
                    !isNaN(attributes.mentoringSessionCount))) {
                this.mentoringSessionCount = attributes.mentoringSessionCount;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=ChannelsUserMetadata.js.map