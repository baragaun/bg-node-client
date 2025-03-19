import { MutationResult } from '../../../types/index.js';
import { MyUser } from '../../../types/models/MyUser.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { MyUserInput } from '../../gql/graphql.js';
declare const updateMyUser: (changes: MyUserInput, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default updateMyUser;
