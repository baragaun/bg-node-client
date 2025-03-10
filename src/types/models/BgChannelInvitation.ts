import { BaseModel } from './BaseModel.js';
import { ChannelInvitationStatus } from '../../enums.js';

export class BgChannelInvitation extends BaseModel {
  public channelId?: string | null;
  public recipientId = '';
  public channelName?: string | null;
  public channelTopic?: string | null;
  public messageText?: string | null;
  public declineReasonTextId?: string | null;
  public dismissedFromInboxBySenderAt?: string | null;
  public dismissedFromInboxByRecipientAt?: string | null;
  public readByRecipientAt?: string | null;
  public status: ChannelInvitationStatus = ChannelInvitationStatus.unset;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  public userSearchId?: string | null;
  public searchRank?: number | null;

  constructor(attributes?: Partial<BgChannelInvitation>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
      }
      if (attributes.recipientId) {
        this.recipientId = attributes.recipientId;
      }
      if (attributes.channelName) {
        this.channelName = attributes.channelName;
      }
      if (attributes.channelTopic) {
        this.channelTopic = attributes.channelTopic;
      }
      if (attributes.messageText) {
        this.messageText = attributes.messageText;
      }
      if (attributes.declineReasonTextId) {
        this.declineReasonTextId = attributes.declineReasonTextId;
      }
      if (attributes.dismissedFromInboxBySenderAt) {
        this.dismissedFromInboxBySenderAt = attributes.dismissedFromInboxBySenderAt;
      }
      if (attributes.dismissedFromInboxByRecipientAt) {
        this.dismissedFromInboxByRecipientAt = attributes.dismissedFromInboxByRecipientAt;
      }
      if (attributes.readByRecipientAt) {
        this.readByRecipientAt = attributes.readByRecipientAt;
      }
      if (attributes.status) {
        this.status = attributes.status;
      }
      if (attributes.suspendedAt) {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.suspendedBy) {
        this.suspendedBy = attributes.suspendedBy;
      }
      if (attributes.userSearchId) {
        this.userSearchId = attributes.userSearchId;
      }
      if (attributes.searchRank === 0 || (attributes.searchRank && !isNaN(attributes.searchRank))) {
        this.searchRank = attributes.searchRank;
      }
    }
  }
}
