"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelMetadata = void 0;
const BaseModelMetadata_js_1 = require("./BaseModelMetadata.js");
class BgChannelMetadata extends BaseModelMetadata_js_1.BaseModelMetadata {
    unseenMessageInfo;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.unseenMessageInfo) {
                this.unseenMessageInfo = attributes.unseenMessageInfo;
            }
        }
    }
}
exports.BgChannelMetadata = BgChannelMetadata;
