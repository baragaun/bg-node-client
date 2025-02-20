"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsUserMetadata = void 0;
const BgChannelsUserMetadata_js_1 = require("./BgChannelsUserMetadata.js");
class ChannelsUserMetadata extends BgChannelsUserMetadata_js_1.BgChannelsUserMetadata {
    mentoringSessionCount = 0;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.mentoringSessionCount === 0 ||
                (attributes.mentoringSessionCount &&
                    !isNaN(attributes.mentoringSessionCount))) {
                this.mentoringSessionCount = attributes.mentoringSessionCount;
            }
        }
    }
}
exports.ChannelsUserMetadata = ChannelsUserMetadata;
