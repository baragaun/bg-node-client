import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter } from '../../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  PurchaseOrderInput,
  PurchaseOrderListFilter as PurchaseOrderListFilterFromNetwork,
  QueryFindPurchaseOrdersArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findPurchaseOrders: PurchaseOrder[];
  };
  errors?: { message: string }[];
};

const findPurchaseOrders = async (
  filter: PurchaseOrderListFilter | null | undefined,
  match: Partial<PurchaseOrder> | null | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<PurchaseOrder>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findPurchaseOrders: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindPurchaseOrdersArgs = {
      filter: (filter || null) as unknown as PurchaseOrderListFilterFromNetwork | null,
      match: match as unknown as InputMaybe<PurchaseOrderInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findPurchaseOrders({
      $: args,
      ...modelFields.purchaseOrder,
    });

    logger.debug('fsdata.findPurchaseOrders received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findPurchaseOrders: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findPurchaseOrders
        ? response.data.findPurchaseOrders.map((purchaseOrder) => new PurchaseOrder(purchaseOrder))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findPurchaseOrders: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findPurchaseOrders;
