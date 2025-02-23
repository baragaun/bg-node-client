import { ChannelInvitationStatus } from '../enums.js'
import { BaseModel } from './BaseModel.js';

export class BgChannelInvitation extends BaseModel {
  public channelId?: string | null
  public recipientId = ''
  public channelName?: string | null
  public channelTopic?: string | null
  public messageText?: string | null
  public declineReasonTextId?: string | null
  public dismissedFromInboxBySenderAt?: Date | null
  public dismissedFromInboxByRecipientAt?: Date | null
  public readByRecipientAt?: Date | null
  public status: ChannelInvitationStatus = ChannelInvitationStatus.unset
  public suspendedAt?: Date | null
  public suspendedBy?: string | null
  public userSearchId?: string | null
  public searchRank?: number | null

  constructor(attributes?: Partial<BgChannelInvitation>) {
    super(attributes)

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelId) {
        this.channelId = attributes.channelId
      }
      if (attributes.recipientId) {
        this.recipientId = attributes.recipientId
      }
      if (attributes.channelName) {
        this.channelName = attributes.channelName
      }
      if (attributes.channelTopic) {
        this.channelTopic = attributes.channelTopic
      }
      if (attributes.messageText) {
        this.messageText = attributes.messageText
      }
      if (attributes.declineReasonTextId) {
        this.declineReasonTextId = attributes.declineReasonTextId
      }
      if (attributes.dismissedFromInboxBySenderAt) {
        if (attributes.dismissedFromInboxBySenderAt instanceof Date) {
          this.dismissedFromInboxBySenderAt = attributes.dismissedFromInboxBySenderAt
        } else {
          this.dismissedFromInboxBySenderAt = new Date(attributes.dismissedFromInboxBySenderAt)
        }
      }
      if (attributes.dismissedFromInboxByRecipientAt) {
        if (attributes.dismissedFromInboxByRecipientAt instanceof Date) {
          this.dismissedFromInboxByRecipientAt = attributes.dismissedFromInboxByRecipientAt
        } else {
          this.dismissedFromInboxByRecipientAt = new Date(attributes.dismissedFromInboxByRecipientAt)
        }
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
      if (attributes.suspendedAt) {
        if (attributes.suspendedAt instanceof Date) {
          this.suspendedAt = attributes.suspendedAt
        } else {
          this.suspendedAt = new Date(attributes.suspendedAt)
        }
      }
      if (attributes.suspendedBy) {
        this.suspendedBy = attributes.suspendedBy
      }
      if (attributes.userSearchId) {
        this.userSearchId = attributes.userSearchId
      }
      if (
        attributes.searchRank === 0 ||
        (
          attributes.searchRank &&
          !isNaN(attributes.searchRank)
        )
      ) {
        this.searchRank = attributes.searchRank
      }
    }
  }
}
