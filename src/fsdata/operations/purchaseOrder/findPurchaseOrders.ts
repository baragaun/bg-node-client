import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter as PurchaseOrderListFilterFromClient } from '../../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  PurchaseOrderInput,
  PurchaseOrderListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindPurchaseOrdersArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findPurchaseOrders: PurchaseOrder[] | null;
  };
  errors?: { message: string }[];
};

const findPurchaseOrders = async (
  filter: PurchaseOrderListFilterFromClient | null | undefined,
  match: Partial<PurchaseOrder> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<PurchaseOrder>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findPurchaseOrders: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindPurchaseOrdersArgs = {
      filter: (filter || null) as unknown as PurchaseOrderListFilter | null,
      match: match as unknown as InputMaybe<PurchaseOrderInput>,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findPurchaseOrders({
      $: args,
      ...modelFields.purchaseOrder,
    });

    logger.debug('fsdata.findPurchaseOrders response:', { response });

    return {
      objects: response.data.findPurchaseOrders
        ? response.data.findPurchaseOrders.map((purchaseOrder) => new PurchaseOrder(purchaseOrder))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findPurchaseOrders: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findPurchaseOrders;
