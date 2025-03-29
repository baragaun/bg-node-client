import { MyUser } from '../../../models/MyUser.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MyUserInput } from '../../gql/graphql.js';
declare const updateMyUser: (changes: MyUserInput, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
export default updateMyUser;
