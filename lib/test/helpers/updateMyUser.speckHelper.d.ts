import { UserProps } from '../types.js';
import { BgNodeClient } from '../../BgNodeClient.js';
export declare const updateMyUserSpeckHelper: (changes: Partial<UserProps>, client: BgNodeClient) => Promise<boolean>;
