import { SidContact } from './SidContact.js';
export class Contact extends SidContact {
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
        }
    }
}
//# sourceMappingURL=Contact.js.map