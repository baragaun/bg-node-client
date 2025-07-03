import { BaseModel } from './BaseModel.js';

export class WalletItemTransfer extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public walletItemId = '';
  public notificationId?: string | null;
  public recipientEmail?: string | null;
  public recipientFullName?: string | null;
  public subjectText?: string | null;
  public messageText?: string | null;
  public sentAt?: string | null;
  public canceledAt?: string | null;
  public archivedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<WalletItemTransfer>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.walletItemId !== undefined) {
        this.walletItemId = attributes.walletItemId;
      }
      if (attributes.notificationId !== undefined) {
        this.notificationId = attributes.notificationId;
      }
      if (attributes.recipientEmail !== undefined) {
        this.recipientEmail = attributes.recipientEmail;
      }
      if (attributes.recipientFullName !== undefined) {
        this.recipientFullName = attributes.recipientFullName;
      }
      if (attributes.subjectText !== undefined) {
        this.subjectText = attributes.subjectText;
      }
      if (attributes.messageText !== undefined) {
        this.messageText = attributes.messageText;
      }
      if (attributes.sentAt !== undefined && attributes.sentAt !== '') {
        this.sentAt = attributes.sentAt;
      }
      if (attributes.canceledAt !== undefined && attributes.canceledAt !== '') {
        this.canceledAt = attributes.canceledAt;
      }
      if (attributes.archivedAt !== undefined && attributes.archivedAt !== '') {
        this.archivedAt = attributes.archivedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
