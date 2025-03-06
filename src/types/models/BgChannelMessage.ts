/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { ChannelMessageType } from '../enums.js';
import { BaseModel } from './BaseModel.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';
import { ChannelMessageStatus } from './ChannelMessageStatus.js';

export class BgChannelMessage extends BaseModel {
  public channelId = '';
  public replyToMessageId?: string | null;
  public channelMessageType?: ChannelMessageType | null;
  public messageText?: string | null;
  public statuses?: ChannelMessageStatus[] | null;
  declare public metadata?: ChannelMessageMetadata | null;
  public editedAt?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;

  constructor(attributes?: Partial<BgChannelMessage>) {
    super(attributes);

    if (attributes) {
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
      }
      if (attributes.replyToMessageId) {
        this.replyToMessageId = attributes.replyToMessageId;
      }
      if (attributes.channelMessageType) {
        this.channelMessageType = attributes.channelMessageType;
      }
      if (attributes.messageText) {
        this.messageText = attributes.messageText;
      }
      if (attributes.statuses) {
        this.statuses = attributes.statuses;
      }
      if (attributes.metadata) {
        this.metadata = attributes.metadata;
      }
      if (attributes.editedAt) {
        this.editedAt = attributes.editedAt;
      }
      if (attributes.suspendedAt) {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.suspendedBy) {
        this.suspendedBy = attributes.suspendedBy;
      }
    }
  }
}
