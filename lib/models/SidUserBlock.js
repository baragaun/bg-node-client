export class SidUserBlock {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    reasonTextId = '';
    notes;
    adminNotes;
    createdAt = new Date().toISOString();
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId !== undefined) {
                this.userId = attributes.userId;
            }
            if (attributes.reasonTextId !== undefined) {
                this.reasonTextId = attributes.reasonTextId;
            }
            if (attributes.notes !== undefined) {
                this.notes = attributes.notes;
            }
            if (attributes.adminNotes !== undefined) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.createdAt !== undefined && attributes.createdAt !== '') {
                this.createdAt = attributes.createdAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidUserBlock.js.map