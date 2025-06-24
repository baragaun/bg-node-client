export class UserBlock {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    reasonTextId = '';
    notes;
    adminNotes;
    createdAt = new Date();
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.reasonTextId) {
                this.reasonTextId = attributes.reasonTextId;
            }
            if (attributes.notes) {
                this.notes = attributes.notes;
            }
            if (attributes.adminNotes) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.createdAt) {
                this.createdAt = attributes.createdAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=UserBlock.js.map