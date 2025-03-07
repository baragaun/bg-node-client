import { UserInput } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const updateUser: (input: UserInput) => Promise<MutationResult>;
export default updateUser;
