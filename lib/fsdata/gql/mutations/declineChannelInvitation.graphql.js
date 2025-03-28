export default `
mutation M($reasonTextId: DeclineChannelInvitationReasonTextId!, $channelInvitationId: String!) {
  declineChannelInvitation(reasonTextId: $reasonTextId, channelInvitationId: $channelInvitationId)
}
`;
//# sourceMappingURL=declineChannelInvitation.graphql.js.map