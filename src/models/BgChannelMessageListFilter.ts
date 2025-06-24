import { BaseListFilter } from './BaseListFilter.js';
import { ChannelMessageType } from '../enums.js';

export class BgChannelMessageListFilter extends BaseListFilter {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelId?: string | null;
  public userIds?: string[] | null;
  public receiverUserId?: string | null;
  public replyToMessageId?: string | null;
  public includeChannelMessageType?: ChannelMessageType[] | null;
  public received?: boolean | null;
  public seen?: boolean | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelMessageListFilter>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
      }
      if (attributes.userIds) {
        this.userIds = attributes.userIds;
      }
      if (attributes.receiverUserId) {
        this.receiverUserId = attributes.receiverUserId;
      }
      if (attributes.replyToMessageId) {
        this.replyToMessageId = attributes.replyToMessageId;
      }
      if (attributes.includeChannelMessageType) {
        this.includeChannelMessageType = attributes.includeChannelMessageType;
      }
      if (attributes.received === true || attributes.received === false) {
        this.received = attributes.received;
      }
      if (attributes.seen === true || attributes.seen === false) {
        this.seen = attributes.seen;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
