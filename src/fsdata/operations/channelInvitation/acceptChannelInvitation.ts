import { ChannelInvitationStatus, ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationAcceptChannelInvitationArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = {
  data: {
    acceptChannelInvitation: string;
  };
  errors?: { message: string }[];
};

const acceptChannelInvitation = async (
  channelInvitationId: string,
  queryOptions: QueryOptions<ChannelInvitation> = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.acceptChannelInvitation: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationAcceptChannelInvitationArgs = { id: channelInvitationId };
    const response: ResponseDataType = await client.mutation.acceptChannelInvitation({ $: args });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.acceptChannelInvitation: errors received',
        { errorCode: (response.errors['0'] as any).extensions.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.acceptChannelInvitation response:', { response });

    if (response.errors) {
      logger.error('fsdata.acceptChannelInvitation: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.acceptChannelInvitation) {
      logger.error('fsdata.acceptChannelInvitation: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    if (!queryOptions.polling) {
      return findById(channelInvitationId, ModelType.ChannelInvitation);
    }

    const isInTargetStateFunc = (ci: ChannelInvitation): boolean => {
      // Check if the ChannelInvitation has been accepted
      return ci.status === ChannelInvitationStatus.accepted;
    };

    if (queryOptions.polling) {
      queryOptions.polling.enabled = true;
      queryOptions.polling.isInTargetStateFunc = isInTargetStateFunc;
    } else {
      queryOptions.polling = {
        enabled: true,
        isInTargetStateFunc,
      };
    }

    logger.debug('fsdata.acceptChannelInvitation: starting polling.');
    const pollingResponse = await pollForUpdatedObject<ChannelInvitation>(
      channelInvitationId,
      ModelType.ChannelInvitation,
      queryOptions,
    );
    logger.debug('fsdata.acceptChannelInvitation: polling finished.', { pollingResponse });

    return pollingResponse;
  } catch (error) {
    logger.error('fsdata.acceptChannelInvitation: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default acceptChannelInvitation;
