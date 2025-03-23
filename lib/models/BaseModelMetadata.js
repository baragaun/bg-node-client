/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BaseModelMetadata {
    updatedAt;
    constructor(attributes) {
        if (attributes) {
            if (attributes.updatedAt) {
                this.updatedAt = attributes.updatedAt;
            }
        }
    }
}
//# sourceMappingURL=BaseModelMetadata.js.map