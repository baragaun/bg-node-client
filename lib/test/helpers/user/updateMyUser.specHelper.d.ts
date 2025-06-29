import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUserInput } from '../../../fsdata/gql/graphql.js';
export declare const updateMyUserSpecHelper: (changes: Partial<MyUserInput>, client: BgNodeClient) => Promise<boolean>;
