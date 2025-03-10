/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class Model {
    id = '';
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
//# sourceMappingURL=Model.js.map