import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ErrorCode,
  MutationCreatePurchaseOrderArgs,
  PurchaseOrderInput,
  ServiceRequest as ServiceRequestFromGql,
  ServiceRequestResult as ServiceRequestResultFromGql,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = {
  data: {
    createPurchaseOrder: ServiceRequest;
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
      input: props as unknown as PurchaseOrderInput,
    };

    const response: ResponseDataType = await client.mutation.createPurchaseOrder({
      $: args,
      ...modelFields.serviceRequest,
    });

    logger.debug('fsdata.createPurchaseOrder received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createPurchaseOrder: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    const serviceRequest = response.data.createPurchaseOrder;

    const queryOptions: QueryOptions<ServiceRequestFromGql> = defaultQueryOptionsForMutations;
    queryOptions.polling = {
      enabled: true,
      isInTargetStateFunc: (sr: ServiceRequestFromGql): boolean => (
        !!sr.finishedAt ||
        sr.result !== ServiceRequestResultFromGql.Unset
      ),
      initialDelay: 1000,
      interval: 1000,
      timeout: 15 * 60 * 1000, // 15 minutes
    };

    const pollingResponse = await pollForUpdatedObject<ServiceRequest>(
      serviceRequest.id,
      ModelType.ServiceRequest,
      queryOptions,
    );

    logger.debug('fsdata.createPurchaseOrder: finished.', { pollingResponse });

    if (pollingResponse.error) {
      logger.error('fsdata.createPurchaseOrder: polling failed',
        { error: pollingResponse.error });
      return { error: pollingResponse.error, serviceRequest };
    }

    if (
      !pollingResponse.object ||
      !Array.isArray(pollingResponse.object.objectIds) ||
      pollingResponse.object.objectIds.length < 1
    ) {
      logger.error('fsdata.createPurchaseOrder: purchase order object not found');
      return { error: ErrorCode.SystemError, serviceRequest };
    }

    const purchaseOrderId = pollingResponse.object.objectIds[0];

    const findResult = await findById<PurchaseOrder>(
      purchaseOrderId,
      ModelType.PurchaseOrder,
    );

    if (findResult.error) {
      logger.error('fsdata.createPurchaseOrder: error loading purchase order',
        { error: findResult.error, purchaseOrderId });
      return { error: findResult.error, serviceRequest };
    }

    if (!findResult.object) {
      logger.error('fsdata.createPurchaseOrder: purchase order not found',
        { purchaseOrderId });
      return { error: ErrorCode.NotFound, serviceRequest };
    }

    return { object: findResult.object, serviceRequest };
  } catch (error) {
    logger.error('fsdata.createPurchaseOrder: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createPurchaseOrder;
