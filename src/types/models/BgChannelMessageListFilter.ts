import { BaseListFilter } from './BaseListFilter.js';
import { ChannelMessageType } from '../../enums.js';

export class BgChannelMessageListFilter extends BaseListFilter {
  public channelId?: string | null;
  public receiverUserId?: string | null;
  public replyToMessageId?: string | null;
  public includeChannelMessageType?: ChannelMessageType[] | null;
  public received?: boolean | null;
  public seen?: boolean | null;

  constructor(attributes?: Partial<BgChannelMessageListFilter>) {
    super(attributes);

    if (attributes) {
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
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
    }
  }
}
