import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ServiceRequest as ServiceRequestFromGql,
  ServiceRequestResult as ServiceRequestResultFromGql,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = {
  data: {
    clearMyShoppingCart: ServiceRequest;
  };
  errors?: { message: string }[];
};

const clearMyShoppingCart = async (
): Promise<QueryResult<ServiceRequest>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.clearMyShoppingCart: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.mutation.clearMyShoppingCart({ ...modelFields.serviceRequest });

    logger.debug('fsdata.clearMyShoppingCart response:',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.clearMyShoppingCart: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    const serviceRequest = response.data.clearMyShoppingCart;
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

    logger.debug('fsdata.clearMyShoppingCart: finished.', { pollingResponse });

    if (pollingResponse.error) {
      logger.error('fsdata.clearMyShoppingCart: polling failed',
        { error: pollingResponse.error });
      return { error: pollingResponse.error, serviceRequest };
    }

    return {
      object: response.data.clearMyShoppingCart,
    };
  } catch (error) {
    logger.error('fsdata.clearMyShoppingCart: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default clearMyShoppingCart;
