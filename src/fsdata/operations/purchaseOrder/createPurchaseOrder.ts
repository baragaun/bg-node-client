import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreatePurchaseOrderArgs, PurchaseOrderInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createPurchaseOrder: PurchaseOrder;
  };
  errors?: { message: string }[];
};

const createPurchaseOrder = async (
  props: Partial<PurchaseOrder>,
): Promise<QueryResult<PurchaseOrder>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createPurchaseOrder: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreatePurchaseOrderArgs = {
      input: new PurchaseOrder(props) as unknown as PurchaseOrderInput,
    };

    const response: ResponseDataType = await client.mutation.createPurchaseOrder({
      $: args,
      ...modelFields.purchaseOrder,
    });

    logger.debug('fsdata.createPurchaseOrder response:', { response });

    return {
      object: response.data.createPurchaseOrder
        ? new PurchaseOrder(response.data.createPurchaseOrder)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createPurchaseOrder: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createPurchaseOrder;
