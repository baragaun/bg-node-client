import { MutationResult } from '../../types/MutationResult.js';
import { UserAuthResponse } from '../../fsdata/gql/graphql.js';
declare const signUpUser: (userHandle: string, email?: string, password?: string) => Promise<MutationResult<UserAuthResponse>>;
export default signUpUser;
