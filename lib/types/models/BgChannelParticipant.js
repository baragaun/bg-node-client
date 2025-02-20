"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelParticipant = void 0;
const BaseModel_js_1 = require("./BaseModel.js");
class BgChannelParticipant extends BaseModel_js_1.BaseModel {
    channelId = '';
    userId = '';
    invitedBy;
    channelName;
    role;
    suspendedAt;
    suspendedBy;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.invitedBy) {
                this.invitedBy = attributes.invitedBy;
            }
            if (attributes.channelName) {
                this.channelName = attributes.channelName;
            }
            if (attributes.role) {
                this.role = attributes.role;
            }
            if (attributes.suspendedAt) {
                if (attributes.suspendedAt instanceof Date) {
                    this.suspendedAt = attributes.suspendedAt;
                }
                else {
                    this.suspendedAt = new Date(attributes.suspendedAt);
                }
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
        }
    }
}
exports.BgChannelParticipant = BgChannelParticipant;
