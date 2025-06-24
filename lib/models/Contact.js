import { SidContact } from './SidContact.js';
export class Contact extends SidContact {
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.metadata !== undefined) {
                this.metadata = attributes.metadata;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return [];
    }
}
//# sourceMappingURL=Contact.js.map