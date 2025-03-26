import { UserProps } from '../types.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
export declare const createMultipleUsersSpeckHelper: (props: UserProps[] | number, client: BgNodeClient) => Promise<MyUser[] | null>;
