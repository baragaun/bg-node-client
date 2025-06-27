import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrderInput } from '../../../models/PurchaseOrderInput.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationCreatePurchaseOrderArgs,
  PurchaseOrderInput as GraphQLPurchaseOrderInput,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    createPurchaseOrder: ServiceRequest;
  };
  errors?: { message: string }[];
};

const createPurchaseOrder = async (
  props: Partial<PurchaseOrderInput>,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createPurchaseOrder: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreatePurchaseOrderArgs = {
      input: new PurchaseOrderInput(props) as unknown as GraphQLPurchaseOrderInput,
    };

    const response: ResponseDataType = await client.mutation.createPurchaseOrder({
      $: args,
      id: true,
      result: true,
      message: true,
      objectIds: true,
      errorCode: true,
    });

    logger.debug('fsdata.createPurchaseOrder response:', { response });

    return {
      object: response.data.createPurchaseOrder ? response.data.createPurchaseOrder : null,
    };
  } catch (error) {
    logger.error('fsdata.createPurchaseOrder: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createPurchaseOrder;
