import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
export declare const signMeUpSpecHelper: (props: Partial<MyUser> | undefined, signOut: boolean, client: BgNodeClient) => Promise<MyUser | null>;
