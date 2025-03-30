import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
// import {
//   ChannelInvitationDirection,
//   FindObjectsOptions,
//   InputMaybe,
//   // QueryFindChannelInvitationsArgs,
// } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelInvitations: ChannelInvitation[] | null;
  };
  errors?: { message: string }[];
};

// todo: implement
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

    const response: ResponseDataType = await client.mutation.findChannelInvitations({
      // $: args,
      id: true,
      ...modelFields.channelInvitation,
    });

    logger.debug('fsdata.findChannelInvitations response:', { response });

    return {
      objects: response.data.findChannelInvitations
        ? response.data.findChannelInvitations.map((i) => new ChannelInvitation(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findChannelInvitations: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelInvitations;
