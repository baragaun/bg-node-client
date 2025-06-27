import { QueryResult } from '../../../types/QueryResult.js';
import { ServiceRequest } from '../../gql/graphql.js';
declare const deleteShoppingCartItem: (id: string, deletePhysically: boolean) => Promise<QueryResult<ServiceRequest>>;
export default deleteShoppingCartItem;
