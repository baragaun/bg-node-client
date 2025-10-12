export class ChannelMessageScope {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    channelMustHaveMessages;
    channelHaveUnseenMessages;
    channelInvitationMustBeAccepted;
    includeArchivedMessages;
    includeSystemMessages;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.channelMustHaveMessages !== undefined) {
                this.channelMustHaveMessages = attributes.channelMustHaveMessages;
            }
            if (attributes.channelHaveUnseenMessages !== undefined) {
                this.channelHaveUnseenMessages = attributes.channelHaveUnseenMessages;
            }
            if (attributes.channelInvitationMustBeAccepted !== undefined) {
                this.channelInvitationMustBeAccepted = attributes.channelInvitationMustBeAccepted;
            }
            if (attributes.includeArchivedMessages !== undefined) {
                this.includeArchivedMessages = attributes.includeArchivedMessages;
            }
            if (attributes.includeSystemMessages !== undefined) {
                this.includeSystemMessages = attributes.includeSystemMessages;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=ChannelMessageScope.js.map