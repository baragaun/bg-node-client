import { MutationResult } from '../types/MutationResult.js';
import { UserAuthResponse, UserIdentType } from '../graphql/gql/graphql.js';
declare const signInUser: (ident: string, identType: UserIdentType, password?: string) => Promise<MutationResult<UserAuthResponse>>;
export default signInUser;
