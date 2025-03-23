import { Model } from './Model.js';
export class BaseModel extends Model {
    adminNotes;
    metadata;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.adminNotes) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
        }
    }
}
//# sourceMappingURL=BaseModel.js.map