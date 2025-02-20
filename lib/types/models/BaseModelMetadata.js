"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModelMetadata = void 0;
class BaseModelMetadata {
    updatedAt;
    constructor(attributes) {
        if (attributes) {
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
        }
    }
}
exports.BaseModelMetadata = BaseModelMetadata;
