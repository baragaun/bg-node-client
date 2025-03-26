import { UserProps } from '../types.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
export declare const signMeUpSpeckHelper: (props: UserProps, signOut: boolean, client: BgNodeClient) => Promise<MyUser | null>;
