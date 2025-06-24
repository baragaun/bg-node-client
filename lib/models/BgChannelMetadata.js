/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export class BgChannelMetadata extends BaseModelMetadata {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    unseenMessageInfo;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.unseenMessageInfo) {
                this.unseenMessageInfo = attributes.unseenMessageInfo;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=BgChannelMetadata.js.map