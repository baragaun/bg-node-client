import { ServiceRequest } from '../../fsdata/gql/graphql.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteShoppingCartItem: (id: string, deletePhysically: boolean) => Promise<QueryResult<ServiceRequest>>;
export default deleteShoppingCartItem;
