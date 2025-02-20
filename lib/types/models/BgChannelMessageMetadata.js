"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelMessageMetadata = void 0;
const BaseModelMetadata_js_1 = require("./BaseModelMetadata.js");
class BgChannelMessageMetadata extends BaseModelMetadata_js_1.BaseModelMetadata {
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
exports.BgChannelMessageMetadata = BgChannelMessageMetadata;
