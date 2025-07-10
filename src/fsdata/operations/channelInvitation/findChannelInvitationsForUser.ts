import { ChannelInvitationDirection as ChannelInvitationDirectionFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInvitationDirection,
  FindObjectsOptions,
  InputMaybe,
  QueryFindChannelInvitationsForUserArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelInvitationsForUser: ChannelInvitation[] | null;
  };
  errors?: { message: string }[];
};

const findChannelInvitationsForUser = async (
  userId: string,
  onlyUnseen: boolean,
  onlyPending: boolean,
  direction: ChannelInvitationDirectionFromClient,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannelInvitationsForUser: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindChannelInvitationsForUserArgs = {
      userId,
      onlyUnseen,
      onlyPending,
      direction: direction as unknown as ChannelInvitationDirection,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findChannelInvitationsForUser({
      $: args,
      ...modelFields.channelInvitation,
    });

    logger.debug('fsdata.findChannelInvitations received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findChannelInvitationsForUser: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findChannelInvitationsForUser
        ? response.data.findChannelInvitationsForUser.map((i) => new ChannelInvitation(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findChannelInvitationsForUser: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelInvitationsForUser;
