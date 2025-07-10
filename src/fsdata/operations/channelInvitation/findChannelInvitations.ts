import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelInvitations: ChannelInvitation[] | null;
  };
  errors?: { message: string }[];
};

const findChannelInvitations = async (
  _filter: ChannelInvitationListFilter,
  _match: Partial<ChannelInvitation>,
  _options: FindObjectsOptionsFromClient,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannelInvitations: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    // const args: QueryFindChannelInvitationsArgs = {
    //   userId,
    //   onlyUnseen,
    //   onlyPending,
    //   direction: direction as unknown as ChannelInvitationDirection,
    //   options: options as unknown as InputMaybe<FindObjectsOptions>,
    // };

    const response: ResponseDataType = await client.query.findChannelInvitations({
      // $: args,
      ...modelFields.channelInvitation,
    });

    logger.debug('fsdata.findChannelInvitations received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findChannelInvitations: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findChannelInvitations
        ? response.data.findChannelInvitations.map((i) => new ChannelInvitation(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findChannelInvitations: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelInvitations;
