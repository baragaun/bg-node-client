import { BaseModel } from './BaseModel.js';
export class SidUserMetadata extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    totalTimeOnPlatform = 0;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.totalTimeOnPlatform === null ||
                attributes.totalTimeOnPlatform === 0 ||
                (attributes.totalTimeOnPlatform &&
                    !isNaN(attributes.totalTimeOnPlatform))) {
                this.totalTimeOnPlatform = attributes.totalTimeOnPlatform;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidUserMetadata.js.map