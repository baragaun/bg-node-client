import { BaseModel } from './BaseModel.js';
export class ContentStatus extends BaseModel {
    optionsUpdatedAt;
    myUserUpdatedAt;
    myUserInboxUpdatedAt;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.optionsUpdatedAt) {
                this.optionsUpdatedAt = attributes.optionsUpdatedAt;
            }
            if (attributes.myUserUpdatedAt) {
                this.myUserUpdatedAt = attributes.myUserUpdatedAt;
            }
            if (attributes.myUserInboxUpdatedAt) {
                this.myUserInboxUpdatedAt = attributes.myUserInboxUpdatedAt;
            }
        }
    }
}
//# sourceMappingURL=ContentStatus.js.map