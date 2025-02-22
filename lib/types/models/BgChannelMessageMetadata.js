/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export class BgChannelMessageMetadata extends BaseModelMetadata {
    senderUserHandle;
    senderFirstName;
    senderLastName;
    senderAvatarUrl;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.senderUserHandle) {
                this.senderUserHandle = attributes.senderUserHandle;
            }
            if (attributes.senderFirstName) {
                this.senderFirstName = attributes.senderFirstName;
            }
            if (attributes.senderLastName) {
                this.senderLastName = attributes.senderLastName;
            }
            if (attributes.senderAvatarUrl) {
                this.senderAvatarUrl = attributes.senderAvatarUrl;
            }
        }
    }
}
//# sourceMappingURL=BgChannelMessageMetadata.js.map