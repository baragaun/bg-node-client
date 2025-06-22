import { Model } from './Model.js';
export class BaseModel extends Model {
    // @DISABLEDbg-codegen:class.attr >>Note: Code is generated between these markers<<
    adminNotes;
    metadata;
    // @DISABLEDbg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @DISABLEDbg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.adminNotes !== undefined) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.metadata !== undefined) {
                this.metadata = attributes.metadata;
            }
            // @DISABLEDbg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=BaseModel.js.map