import { BaseModel } from './BaseModel.js';
export class UserInbox extends BaseModel {
    userId = '';
    channels;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.channels) {
                this.channels = attributes.channels;
            }
        }
    }
}
//# sourceMappingURL=UserInbox.js.map