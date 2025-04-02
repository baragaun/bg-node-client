import {
  ChannelInvitationStatus,
  DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient,
  ModelType,
} from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  DeclineChannelInvitationReasonTextId,
  MutationDeclineChannelInvitationArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';

type ResponseDataType = {
  data: {
    declineChannelInvitation: string;
  };
  errors?: { message: string }[];
};

const declineChannelInvitation = async (
  channelInvitationId: string,
  reasonTextId: DeclineChannelInvitationReasonTextIdFromClient,
  queryOptions: QueryOptions<ChannelInvitation> = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.declineChannelInvitation: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationDeclineChannelInvitationArgs = {
      channelInvitationId,
      reasonTextId: reasonTextId as unknown as DeclineChannelInvitationReasonTextId,
    };

    const response: ResponseDataType = await client.mutation.declineChannelInvitation({ $: args });

    logger.debug('fsdata.declineChannelInvitation response:', { response });

    if (response.errors) {
      logger.error('fsdata.declineChannelInvitation: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (!response.data.declineChannelInvitation) {
      logger.error('fsdata.declineChannelInvitation: mutation did not return a valid response.');
      return { error: 'system-error' };
    }

    if (!queryOptions.polling) {
      return findById(channelInvitationId, ModelType.ChannelInvitation);
    }

    const isInTargetStateFunc = (ci: ChannelInvitation): boolean => {
      // Check if the ChannelInvitation has been declineed
      return ci.status === ChannelInvitationStatus.declined;
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

    logger.debug('fsdata.declineChannelInvitation: starting polling.');
    const pollingResponse = await pollForUpdatedObject<ChannelInvitation>(
      channelInvitationId,
      ModelType.ChannelInvitation,
      queryOptions,
    );
    logger.debug('fsdata.declineChannelInvitation: polling finished.', { pollingResponse });

    return pollingResponse;
  } catch (error) {
    logger.error('fsdata.declineChannelInvitation: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default declineChannelInvitation;
