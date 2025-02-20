"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMessage = void 0;
const BgChannelMessage_js_1 = require("./BgChannelMessage.js");
class ChannelMessage extends BgChannelMessage_js_1.BgChannelMessage {
    mm2ConversationId;
    mm2Id;
    syncedWithMm2At;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.mm2ConversationId) {
                this.mm2ConversationId = attributes.mm2ConversationId;
            }
            if (attributes.mm2Id) {
                this.mm2Id = attributes.mm2Id;
            }
            if (attributes.syncedWithMm2At) {
                if (attributes.syncedWithMm2At instanceof Date) {
                    this.syncedWithMm2At = attributes.syncedWithMm2At;
                }
                else {
                    this.syncedWithMm2At = new Date(attributes.syncedWithMm2At);
                }
            }
        }
    }
}
exports.ChannelMessage = ChannelMessage;
