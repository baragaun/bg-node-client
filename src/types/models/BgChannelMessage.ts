/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModel } from './BaseModel.js'
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js'
import { ChannelMessageStatus } from './ChannelMessageStatus.js'
import { ChannelMessageType } from '../enums.js'

export class BgChannelMessage extends BaseModel {
  public channelId = ''
  public replyToMessageId?: string | null
  public channelMessageType?: ChannelMessageType | null
  public messageText?: string | null
  public statuses?: ChannelMessageStatus[] | null
  declare public metadata?: ChannelMessageMetadata | null
  public editedAt?: Date | null
  public suspendedAt?: Date | null
  public suspendedBy?: string | null

  constructor(attributes?: Partial<BgChannelMessage>) {
    super(attributes)

    if (attributes) {
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
      if (attributes.statuses) {
        this.statuses = attributes.statuses
      }
      if (attributes.metadata) {
        this.metadata = attributes.metadata
      }
      if (attributes.editedAt) {
        if (attributes.editedAt instanceof Date) {
          this.editedAt = attributes.editedAt
        } else {
          this.editedAt = new Date(attributes.editedAt)
        }
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
    }
  }
}
