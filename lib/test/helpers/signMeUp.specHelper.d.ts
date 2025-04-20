import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserChanges } from '../../models/MyUserChanges.js';
export declare const signMeUpSpecHelper: (changes: Partial<MyUserChanges> | undefined, signOut: boolean, client: BgNodeClient) => Promise<MyUser | null>;
