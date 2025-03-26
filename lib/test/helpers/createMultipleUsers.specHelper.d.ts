import { UserProps } from '../types.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';
export declare const createMultipleUsersSpecHelper: (props: UserProps[] | number, client: BgNodeClient) => Promise<MyUser[] | null>;
