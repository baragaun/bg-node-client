/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgChannelsUserMetadata {
  public channelCount = 0
  public messagesSentCount = 0
  public unseenMessageCount = 0
  public unrespondedMessageCount = 0
  public invitationsSentCount = 0
  public invitationsReceivedCount = 0
  public rejectedInvitationCount = 0
  public acceptedInvitationCount = 0
  public pendingInvitationCount = 0
  public updatedAt?: string | null

  constructor(attributes?: Partial<BgChannelsUserMetadata>) {
    if (attributes) {
      if (
        attributes.channelCount === 0 ||
        (
          attributes.channelCount &&
          !isNaN(attributes.channelCount)
        )
      ) {
        this.channelCount = attributes.channelCount
      }
      if (
        attributes.messagesSentCount === 0 ||
        (
          attributes.messagesSentCount &&
          !isNaN(attributes.messagesSentCount)
        )
      ) {
        this.messagesSentCount = attributes.messagesSentCount
      }
      if (
        attributes.unseenMessageCount === 0 ||
        (
          attributes.unseenMessageCount &&
          !isNaN(attributes.unseenMessageCount)
        )
      ) {
        this.unseenMessageCount = attributes.unseenMessageCount
      }
      if (
        attributes.unrespondedMessageCount === 0 ||
        (
          attributes.unrespondedMessageCount &&
          !isNaN(attributes.unrespondedMessageCount)
        )
      ) {
        this.unrespondedMessageCount = attributes.unrespondedMessageCount
      }
      if (
        attributes.invitationsSentCount === 0 ||
        (
          attributes.invitationsSentCount &&
          !isNaN(attributes.invitationsSentCount)
        )
      ) {
        this.invitationsSentCount = attributes.invitationsSentCount
      }
      if (
        attributes.invitationsReceivedCount === 0 ||
        (
          attributes.invitationsReceivedCount &&
          !isNaN(attributes.invitationsReceivedCount)
        )
      ) {
        this.invitationsReceivedCount = attributes.invitationsReceivedCount
      }
      if (
        attributes.rejectedInvitationCount === 0 ||
        (
          attributes.rejectedInvitationCount &&
          !isNaN(attributes.rejectedInvitationCount)
        )
      ) {
        this.rejectedInvitationCount = attributes.rejectedInvitationCount
      }
      if (
        attributes.acceptedInvitationCount === 0 ||
        (
          attributes.acceptedInvitationCount &&
          !isNaN(attributes.acceptedInvitationCount)
        )
      ) {
        this.acceptedInvitationCount = attributes.acceptedInvitationCount
      }
      if (
        attributes.pendingInvitationCount === 0 ||
        (
          attributes.pendingInvitationCount &&
          !isNaN(attributes.pendingInvitationCount)
        )
      ) {
        this.pendingInvitationCount = attributes.pendingInvitationCount
      }
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt
      }
    }
  }
}
