/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BaseModel {
    id = '';
    adminNotes;
    metadata;
    createdAt = new Date();
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
                if (attributes.createdAt instanceof Date) {
                    this.createdAt = attributes.createdAt;
                }
                else {
                    this.createdAt = new Date(attributes.createdAt);
                }
            }
            if (attributes.createdBy) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
            if (attributes.updatedBy) {
                this.updatedBy = attributes.updatedBy;
            }
            if (attributes.deletedAt) {
                if (attributes.deletedAt instanceof Date) {
                    this.deletedAt = attributes.deletedAt;
                }
                else {
                    this.deletedAt = new Date(attributes.deletedAt);
                }
            }
            if (attributes.deletedBy) {
                this.deletedBy = attributes.deletedBy;
            }
        }
    }
}
//# sourceMappingURL=BaseModel.js.map