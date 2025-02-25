import { ChannelMessageType } from '../enums.js';

export class BgChannelInboxItemMessage {
  public id = ''
  public channelId = ''
  public replyToMessageId?: string | null
  public channelMessageType?: ChannelMessageType | null
  public messageText?: string | null
  public senderUserHandle?: string | null
  public senderFirstName?: string | null
  public senderLastName?: string | null
  public senderAvatarUrl?: string | null
  public seenAt?: Date | null
  public isArchived?: boolean | null
  public createdAt: Date = new Date()
  public createdBy?: string | null
  public updatedAt?: Date | null
  public updatedBy?: string | null
  public userIds?: string[] | null

  constructor(attributes?: Partial<BgChannelInboxItemMessage>) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id
      }
      if (attributes.channelId) {
        this.channelId = attributes.channelId
      }
      if (attributes.replyToMessageId) {
        this.replyToMessageId = attributes.replyToMessageId
      }
      if (attributes.channelMessageType) {
        this.channelMessageType = attributes.channelMessageType
      }
      if (attributes.messageText) {
        this.messageText = attributes.messageText
      }
      if (attributes.senderUserHandle) {
        this.senderUserHandle = attributes.senderUserHandle
      }
      if (attributes.senderFirstName) {
        this.senderFirstName = attributes.senderFirstName
      }
      if (attributes.senderLastName) {
        this.senderLastName = attributes.senderLastName
      }
      if (attributes.senderAvatarUrl) {
        this.senderAvatarUrl = attributes.senderAvatarUrl
      }
      if (attributes.seenAt) {
        if (attributes.seenAt instanceof Date) {
          this.seenAt = attributes.seenAt
        } else {
          this.seenAt = new Date(attributes.seenAt)
        }
      }
      if (attributes.isArchived === true || attributes.isArchived === false) {
        this.isArchived = attributes.isArchived
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
      if (attributes.updatedAt) {
        if (attributes.updatedAt instanceof Date) {
          this.updatedAt = attributes.updatedAt
        } else {
          this.updatedAt = new Date(attributes.updatedAt)
        }
      }
      if (attributes.updatedBy) {
        this.updatedBy = attributes.updatedBy
      }
      if (attributes.userIds) {
        this.userIds = attributes.userIds
      }
    }
  }
}
