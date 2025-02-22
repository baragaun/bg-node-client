export class UserBlock {
    userId = '';
    reasonTextId = '';
    notes;
    adminNotes;
    createdAt = new Date();
    constructor(attributes) {
        if (attributes) {
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
                if (attributes.createdAt instanceof Date) {
                    this.createdAt = attributes.createdAt;
                }
                else {
                    this.createdAt = new Date(attributes.createdAt);
                }
            }
        }
    }
}
//# sourceMappingURL=UserBlock.js.map