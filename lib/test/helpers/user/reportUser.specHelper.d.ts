import { BgNodeClient } from '../../../BgNodeClient.js';
import { ReportUserReasonTextId } from '../../../enums.js';
export declare const reportUserSpecHelper: (userId: string, reasonTextId: ReportUserReasonTextId, notes: string | undefined, client: BgNodeClient) => Promise<void>;
