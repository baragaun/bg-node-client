import { BaseModel } from './BaseModel.js';
export declare class WalletItemTransfer extends BaseModel {
    walletItemId: string;
    notificationId?: string | null;
    recipientEmail?: string | null;
    recipientFullName?: string | null;
    subjectText?: string | null;
    messageText?: string | null;
    sentAt?: string | null;
    canceledAt?: string | null;
    archivedAt?: string | null;
    constructor(attributes?: Partial<WalletItemTransfer>);
}
