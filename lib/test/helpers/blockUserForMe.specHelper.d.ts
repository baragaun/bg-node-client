import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
export declare const blockUserForMeSpecHelper: (userId: string, reasonTextId: string | undefined, notes: string | undefined, client: BgNodeClient) => Promise<MyUser>;
