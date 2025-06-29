import { BgNodeClient } from '../../../BgNodeClient.js';
import { ReportUserReasonTextId } from '../../../enums.js';
export declare const reportUserForMeSpecHelper: (userId: string, reasonTextId: ReportUserReasonTextId, notes: string | undefined, client: BgNodeClient) => Promise<void>;
