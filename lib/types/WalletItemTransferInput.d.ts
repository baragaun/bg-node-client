export interface WalletItemTransferInput {
    walletItemId?: string;
    notificationId?: string;
    recipientEmail?: string;
    recipientFullName?: string;
    subjectText?: string;
    messageText?: string;
    sentAt?: string;
    canceledAt?: string;
    archivedAt?: string;
}
