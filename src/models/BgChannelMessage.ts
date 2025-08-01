/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';
import { ChannelMessageStatus } from './ChannelMessageStatus.js';
import { ChannelMessageType } from '../enums.js';

export class BgChannelMessage extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelId = '';
  public replyToMessageId?: string | null;
  public channelMessageType?: ChannelMessageType | null;
  public messageText?: string | null;
  public statuses?: ChannelMessageStatus[] | null;
  declare public metadata?: ChannelMessageMetadata | null;
  public editedAt?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelMessage>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
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
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['messageText'];
  }
}
