import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateChannelInvitationArgs, ChannelInvitationInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createChannelInvitation: ChannelInvitation;
  };
  errors?: { message: string }[];
};

const createChannelInvitation = async (
  props: Partial<ChannelInvitation>,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createChannelInvitation: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateChannelInvitationArgs = {
      input: props as unknown as ChannelInvitationInput,
    };

    const response: ResponseDataType = await client.mutation.createChannelInvitation({
      $: args,
      ...modelFields.channelInvitation,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createChannelInvitation: errors received',
        { errorCode: (response.errors['0'] as any).extensions.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.createChannelInvitation response:', { response });

    return {
      object: response.data.createChannelInvitation
        ? new ChannelInvitation(response.data.createChannelInvitation)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannelInvitation: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createChannelInvitation;
