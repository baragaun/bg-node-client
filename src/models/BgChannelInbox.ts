import { BgChannelInboxItemInvitation } from './BgChannelInboxItemInvitation.js';
import { BgChannelInboxItemMessage } from './BgChannelInboxItemMessage.js';

export class BgChannelInbox {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public unseenMessages?: BgChannelInboxItemMessage[] | null;
  public unseenArchivedMessages?: BgChannelInboxItemMessage[] | null;
  public latestMessages?: BgChannelInboxItemMessage[] | null;
  public latestArchivedMessages?: BgChannelInboxItemMessage[] | null;
  public pendingInvitations?: BgChannelInboxItemInvitation[] | null;
  public invitations?: BgChannelInboxItemInvitation[] | null;
  public updatedAt?: string | null;
  public updatedBy?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelInbox>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.unseenMessages) {
        this.unseenMessages = attributes.unseenMessages;
      }
      if (attributes.unseenArchivedMessages) {
        this.unseenArchivedMessages = attributes.unseenArchivedMessages;
      }
      if (attributes.latestMessages) {
        this.latestMessages = attributes.latestMessages;
      }
      if (attributes.latestArchivedMessages) {
        this.latestArchivedMessages = attributes.latestArchivedMessages;
      }
      if (attributes.pendingInvitations) {
        this.pendingInvitations = attributes.pendingInvitations;
      }
      if (attributes.invitations) {
        this.invitations = attributes.invitations;
      }
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt;
      }
      if (attributes.updatedBy) {
        this.updatedBy = attributes.updatedBy;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
