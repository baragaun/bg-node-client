import { UserProps } from '../types.js';
import { BgNodeClient } from '../../BgNodeClient.js';
export declare const updateMyUserSpecHelper: (changes: Partial<UserProps>, client: BgNodeClient) => Promise<boolean>;
