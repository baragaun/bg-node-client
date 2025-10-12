export const UserMetadataSchema = {
    title: 'UserMetadata',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        channelsMetadata: {
            type: 'object',
            properties: {
                channelCount: {
                    type: 'integer',
                },
                messagesSentCount: {
                    type: 'integer',
                },
                unseenMessageCount: {
                    type: 'integer',
                },
                unrespondedMessageCount: {
                    type: 'integer',
                },
                invitationsSentCount: {
                    type: 'integer',
                },
                invitationsReceivedCount: {
                    type: 'integer',
                },
                declinedInvitationCount: {
                    type: 'integer',
                },
                acceptedInvitationCount: {
                    type: 'integer',
                },
                pendingInvitationCount: {
                    type: 'integer',
                },
                updatedAt: {
                    type: 'string',
                    format: 'date-time',
                    nullable: true,
                },
                mentoringSessionCount: {
                    type: 'integer',
                },
            },
        },
    },
    required: ['id'],
};
//# sourceMappingURL=UserMetadataSchema.js.map