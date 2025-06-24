/** Copyright ©2024 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export class SidContactMetadata extends BaseModelMetadata {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    firstName;
    lastName;
    userHandle;
    avatarUrl;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.firstName !== undefined) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName !== undefined) {
                this.lastName = attributes.lastName;
            }
            if (attributes.userHandle !== undefined) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.avatarUrl !== undefined) {
                this.avatarUrl = attributes.avatarUrl;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidContactMetadata.js.map