import { BaseModel } from './BaseModel.js';
export class WalletItemTransfer extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    walletItemId = '';
    notificationId;
    recipientEmail;
    recipientPhoneNumber;
    recipientFullName;
    subjectText;
    messageText;
    transferSlug;
    transferSecret;
    passwordHash;
    sendMethod;
    sendPlatform;
    showOnline = true;
    sentAt;
    acceptedAt;
    declinedAt;
    canceledAt;
    archivedAt;
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
            if (attributes.recipientPhoneNumber !== undefined) {
                this.recipientPhoneNumber = attributes.recipientPhoneNumber;
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
            if (attributes.transferSlug !== undefined) {
                this.transferSlug = attributes.transferSlug;
            }
            if (attributes.transferSecret !== undefined) {
                this.transferSecret = attributes.transferSecret;
            }
            if (attributes.passwordHash !== undefined) {
                this.passwordHash = attributes.passwordHash;
            }
            if (attributes.sendMethod !== undefined) {
                this.sendMethod = attributes.sendMethod;
            }
            if (attributes.sendPlatform !== undefined) {
                this.sendPlatform = attributes.sendPlatform;
            }
            if (attributes.showOnline !== undefined) {
                this.showOnline = attributes.showOnline;
            }
            if (attributes.sentAt !== undefined && attributes.sentAt !== '') {
                this.sentAt = attributes.sentAt;
            }
            if (attributes.acceptedAt !== undefined && attributes.acceptedAt !== '') {
                this.acceptedAt = attributes.acceptedAt;
            }
            if (attributes.declinedAt !== undefined && attributes.declinedAt !== '') {
                this.declinedAt = attributes.declinedAt;
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
//# sourceMappingURL=WalletItemTransfer.js.map