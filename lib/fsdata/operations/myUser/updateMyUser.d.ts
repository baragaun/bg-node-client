import { MyUser } from '../../../models/MyUser.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { MyUserInput } from '../../gql/graphql.js';
declare const updateMyUser: (changes: MyUserInput, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default updateMyUser;
