"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMetadata = void 0;
const BgChannelMetadata_js_1 = require("./BgChannelMetadata.js");
class ChannelMetadata extends BgChannelMetadata_js_1.BgChannelMetadata {
    channelInvitationAccepted = false;
    messagesSentByCreatorCount = 0;
    messagesSentByFirstParticipantCount = 0;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.channelInvitationAccepted === true || attributes.channelInvitationAccepted === false) {
                this.channelInvitationAccepted = attributes.channelInvitationAccepted;
            }
            if (attributes.messagesSentByCreatorCount === 0 ||
                (attributes.messagesSentByCreatorCount &&
                    !isNaN(attributes.messagesSentByCreatorCount))) {
                this.messagesSentByCreatorCount = attributes.messagesSentByCreatorCount;
            }
            if (attributes.messagesSentByFirstParticipantCount === 0 ||
                (attributes.messagesSentByFirstParticipantCount &&
                    !isNaN(attributes.messagesSentByFirstParticipantCount))) {
                this.messagesSentByFirstParticipantCount = attributes.messagesSentByFirstParticipantCount;
            }
        }
    }
}
exports.ChannelMetadata = ChannelMetadata;
