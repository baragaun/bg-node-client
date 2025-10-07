import { BaseModel } from './BaseModel.js';
export declare class WalletItemTransfer extends BaseModel {
    walletItemId: string;
    notificationId?: string | null;
    recipientEmail?: string | null;
    recipientPhoneNumber?: string | null;
    recipientFullName?: string | null;
    subjectText?: string | null;
    messageText?: string | null;
    transferSlug?: string | null;
    transferSecret?: string | null;
    passwordHash?: string | null;
    sendMethod?: string | null;
    sendPlatform?: string | null;
    showOnline: boolean;
    sentAt?: string | null;
    acceptedAt?: string | null;
    declinedAt?: string | null;
    canceledAt?: string | null;
    archivedAt?: string | null;
    constructor(attributes?: Partial<WalletItemTransfer>);
}
