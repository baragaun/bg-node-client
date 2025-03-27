export default `
mutation M($channelInvitationId: String!) {
  acceptChannelInvitation(channelInvitationId: $channelInvitationId)
}
`;
