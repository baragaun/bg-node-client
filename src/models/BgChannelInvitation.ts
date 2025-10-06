import { BaseModel } from './BaseModel.js';
import { ChannelInvitationStatus } from '../enums.js';

export class BgChannelInvitation extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelId?: string | null;
  public recipientId = '';
  public channelName?: string | null;
  public channelTopic?: string | null;
  public messageText?: string | null;
  public autoAccept?: boolean | null;
  public declineReasonTextId?: string | null;
  public dismissedFromInboxBySenderAt?: string | null;
  public dismissedFromInboxByRecipientAt?: string | null;
  public readByRecipientAt?: string | null;
  public status: ChannelInvitationStatus = ChannelInvitationStatus.unset;
  public syncedToAnalyticsAt?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  public userSearchId?: string | null;
  public searchRank?: number | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelInvitation>) {
    super(attributes);
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelId !== undefined) {
        this.channelId = attributes.channelId;
      }
      if (attributes.recipientId !== undefined) {
        this.recipientId = attributes.recipientId;
      }
      if (attributes.channelName !== undefined) {
        this.channelName = attributes.channelName;
      }
      if (attributes.channelTopic !== undefined) {
        this.channelTopic = attributes.channelTopic;
      }
      if (attributes.messageText !== undefined) {
        this.messageText = attributes.messageText;
      }
      if (attributes.autoAccept !== undefined) {
        this.autoAccept = attributes.autoAccept;
      }
      if (attributes.declineReasonTextId !== undefined) {
        this.declineReasonTextId = attributes.declineReasonTextId;
      }
      if (attributes.dismissedFromInboxBySenderAt !== undefined && attributes.dismissedFromInboxBySenderAt !== '') {
        this.dismissedFromInboxBySenderAt = attributes.dismissedFromInboxBySenderAt;
      }
      if (attributes.dismissedFromInboxByRecipientAt !== undefined && attributes.dismissedFromInboxByRecipientAt !== '') {
        this.dismissedFromInboxByRecipientAt = attributes.dismissedFromInboxByRecipientAt;
      }
      if (attributes.readByRecipientAt !== undefined && attributes.readByRecipientAt !== '') {
        this.readByRecipientAt = attributes.readByRecipientAt;
      }
      if (attributes.status !== undefined) {
        this.status = attributes.status;
      }
      if (attributes.syncedToAnalyticsAt !== undefined && attributes.syncedToAnalyticsAt !== '') {
        this.syncedToAnalyticsAt = attributes.syncedToAnalyticsAt;
      }
      if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.suspendedBy !== undefined) {
        this.suspendedBy = attributes.suspendedBy;
      }
      if (attributes.userSearchId !== undefined) {
        this.userSearchId = attributes.userSearchId;
      }
      if (
        attributes.searchRank === null ||
        attributes.searchRank === 0 ||
        (
          attributes.searchRank &&
          !isNaN(attributes.searchRank)
        )
      ) {
        this.searchRank = attributes.searchRank;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['messageText'];
  }
}
