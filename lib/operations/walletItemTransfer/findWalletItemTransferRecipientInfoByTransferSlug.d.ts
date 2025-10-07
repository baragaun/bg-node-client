import { WalletItemTransferRecipientInfo } from '../../models/WalletItemTransferRecipientInfo.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findWalletItemTransferRecipientInfoByTransferSlug: (transferSlug: string, transferSecret?: string | null) => Promise<QueryResult<WalletItemTransferRecipientInfo>>;
export default findWalletItemTransferRecipientInfoByTransferSlug;
