import { ModelType, ServiceRequestResult } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationUpdateWalletItemTransferPasswordArgs,
  ServiceRequest as ServiceRequestFromGql,
  ServiceRequestResult as ServiceRequestResultFromGql,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = {
  data: {
    updateWalletItemTransferPassword: ServiceRequest;
  };
  errors?: { message: string }[];
};

const updateWalletItemTransferPassword = async (
  transferSlug: string,
  transferSecret: string,
  password: string,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.updateWalletItemTransferPassword: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationUpdateWalletItemTransferPasswordArgs = {
      transferSlug,
      transferSecret,
      password,
    };

    const response: ResponseDataType = await client.mutation.updateWalletItemTransferPassword({
      $: args,
      ...modelFields.serviceRequest,
    });

    logger.debug('fsdata.updateWalletItemTransferPassword response received.',
      { transferSlug, response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.updateWalletItemTransferPassword: errors received.',
        { transferSlug, errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    let serviceRequest = response.data.updateWalletItemTransferPassword;

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
    serviceRequest = pollingResponse.object;

    logger.debug('fsdata.updateWalletItemTransferPassword: finished.',
      { transferSlug, pollingResponse });

    if (pollingResponse.error) {
      logger.error('fsdata.updateWalletItemTransferPassword: polling failed',
        { transferSlug, error: pollingResponse.error });
      return { error: pollingResponse.error, serviceRequest };
    }

    if (serviceRequest.result === ServiceRequestResult.error) {
      logger.error('fsdata.updateWalletItemTransferPassword: processes failed.',
        { transferSlug, serviceRequest });
      return { error: pollingResponse.error, serviceRequest };
    }

    return { serviceRequest };
  } catch (error) {
    logger.error('fsdata.updateWalletItemTransferPassword: error.',
      { transferSlug, error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateWalletItemTransferPassword;
