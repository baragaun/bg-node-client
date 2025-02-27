/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BaseModel {
    id = '';
    adminNotes;
    metadata;
    createdAt = new Date().toISOString();
    createdBy;
    updatedAt;
    updatedBy;
    deletedAt;
    deletedBy;
    constructor(attributes) {
        if (attributes) {
            if (attributes.id) {
                this.id = attributes.id;
            }
            if (attributes.adminNotes) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.createdAt) {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.createdBy) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.updatedAt) {
                this.updatedAt = attributes.updatedAt;
            }
            if (attributes.updatedBy) {
                this.updatedBy = attributes.updatedBy;
            }
            if (attributes.deletedAt) {
                this.deletedAt = attributes.deletedAt;
            }
            if (attributes.deletedBy) {
                this.deletedBy = attributes.deletedBy;
            }
        }
    }
}
//# sourceMappingURL=BaseModel.js.map