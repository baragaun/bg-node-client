import { ChannelInvitationStatus } from '../enums.js'

export class BgChannelInboxItemInvitation {
  public id = ''
  public channelId?: string | null
  public messageText?: string | null
  public readByRecipientAt?: string | null
  public status: ChannelInvitationStatus = ChannelInvitationStatus.unset
  public createdAt: Date = new Date()
  public createdBy?: string | null
  public recipientId?: string | null

  constructor(attributes?: Partial<BgChannelInboxItemInvitation>) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id
      }
      if (attributes.channelId) {
        this.channelId = attributes.channelId
      }
      if (attributes.messageText) {
        this.messageText = attributes.messageText
      }
      if (attributes.readByRecipientAt) {
        this.readByRecipientAt = attributes.readByRecipientAt
      }
      if (attributes.status) {
        this.status = attributes.status
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt
      }
      if (attributes.createdBy) {
        this.createdBy = attributes.createdBy
      }
      if (attributes.recipientId) {
        this.recipientId = attributes.recipientId
      }
    }
  }
}
