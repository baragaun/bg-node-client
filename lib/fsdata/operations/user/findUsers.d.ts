import { User } from '../../../models/User.js';
import { UserListItem } from '../../../models/UserListItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { UserListFilter } from '../../gql/graphql.js';
declare const findUsers: (filter: UserListFilter | null | undefined, match: Partial<User> | null | undefined, options: FindObjectsOptions) => Promise<QueryResult<UserListItem>>;
export default findUsers;
