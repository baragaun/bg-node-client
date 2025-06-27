import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { ServiceRequest } from '../../fsdata/gql/graphql.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { PurchaseOrderInput } from '../../models/PurchaseOrderInput.js';
import { QueryResult } from '../../types/QueryResult.js';

const createPurchaseOrder = async (
  props: PurchaseOrderInput,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createPurchaseOrder: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createPurchaseOrder: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    if (!props) {
      return { error: 'missing-input', operation: MutationType.create };
    }

    if (!props.createdBy) {
      props.createdBy = libData.clientInfoStore().myUserId;
    }

    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    const result = await fsdata.purchaseOrder.createPurchaseOrder(props);

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createPurchaseOrder;
