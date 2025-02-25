import { ChannelInvitationStatus } from '../enums.js'

export class BgChannelInboxItemInvitation {
  public id = ''
  public channelId?: string | null
  public messageText?: string | null
  public readByRecipientAt?: Date | null
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
        if (attributes.readByRecipientAt instanceof Date) {
          this.readByRecipientAt = attributes.readByRecipientAt
        } else {
          this.readByRecipientAt = new Date(attributes.readByRecipientAt)
        }
      }
      if (attributes.status) {
        this.status = attributes.status
      }
      if (attributes.createdAt) {
        if (attributes.createdAt instanceof Date) {
          this.createdAt = attributes.createdAt
        } else {
          this.createdAt = new Date(attributes.createdAt)
        }
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
