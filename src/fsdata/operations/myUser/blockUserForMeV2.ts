import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { IsInTargetStateFunc, QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationBlockUserForMeV2Args } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = { data: { blockUserForMeV2: ServiceRequest }, errors?: { message: string }[] };

const blockUserForMeV2 = async (
  userId: string,
  reasonTextId: string | undefined,
  notes: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.blockUserForMeV2: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    if (!queryOptions) {
      queryOptions = defaultQueryOptionsForMutations;
    }

    const args: MutationBlockUserForMeV2Args = {
      userId,
      reasonTextId,
      notes,
    };
    logger.debug('fsdata.blockUserForMeV2: sending.', { args });

    const response: ResponseDataType = await client.mutation.blockUserForMeV2({ $: args });

    logger.debug('fsdata.blockUserForMeV2: response received.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.blockUserForMeV2: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    if (response.errors) {
      logger.error('fsdata.blockUserForMeV2: failed with error.', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.blockUserForMeV2) {
      logger.error('fsdata.blockUserForMeV2: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    queryOptions.polling = {
      enabled: true,
      isInTargetStateFunc: (
        (updatedServiceRequest: ServiceRequest): boolean => !!updatedServiceRequest.finishedAt
      ) as IsInTargetStateFunc,
    };

    logger.debug('fsdata.blockUserForMeV2: starting polling.');
    const pollingResult = await pollForUpdatedObject<ServiceRequest>(
      response.data.blockUserForMeV2.id,
      ModelType.ServiceRequest,
      queryOptions,
    );
    logger.debug('fsdata.blockUserForMeV2: polling finished.', { pollingResult });

    return pollingResult;
  } catch (error) {
    logger.error('fsdata.blockUserForMeV2: failed with error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default blockUserForMeV2;
