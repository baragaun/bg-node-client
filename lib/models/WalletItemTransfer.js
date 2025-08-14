import { BaseModel } from './BaseModel.js';
export class WalletItemTransfer extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    walletItemId = '';
    notificationId;
    recipientEmail;
    recipientFullName;
    subjectText;
    messageText;
    sentAt;
    canceledAt;
    archivedAt;
    transferSecret;
    transferSlug;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
            if (attributes.transferSecret !== undefined) {
                this.transferSecret = attributes.transferSecret;
            }
            if (attributes.transferSlug !== undefined) {
                this.transferSlug = attributes.transferSlug;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=WalletItemTransfer.js.map