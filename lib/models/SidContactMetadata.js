/** Copyright ©2024 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export class SidContactMetadata extends BaseModelMetadata {
    firstName;
    lastName;
    userHandle;
    avatarUrl;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.firstName) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName) {
                this.lastName = attributes.lastName;
            }
            if (attributes.userHandle) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.avatarUrl) {
                this.avatarUrl = attributes.avatarUrl;
            }
        }
    }
}
//# sourceMappingURL=SidContactMetadata.js.map