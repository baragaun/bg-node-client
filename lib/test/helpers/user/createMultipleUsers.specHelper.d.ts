import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
export declare const createMultipleUsersSpecHelper: (props: Partial<MyUser>[] | number, client: BgNodeClient) => Promise<MyUser[] | null>;
