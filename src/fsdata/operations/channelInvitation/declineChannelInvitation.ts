import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import {
  DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient,
  MutationType,
} from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MutationResult } from '../../../types/MutationResult.js';
import {
  DeclineChannelInvitationReasonTextId,
  MutationDeclineChannelInvitationArgs,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/declineChannelInvitation.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { declineChannelInvitation: string };

// see: https://graffle.js.org/guides/topics/requests
const declineChannelInvitation = async (
  channelInvitationId: string,
  reasonTextId: DeclineChannelInvitationReasonTextIdFromClient,
): Promise<MutationResult<void>> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: libData.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse(gql) as TypedQueryDocumentNode<
    ResponseDataType,
    MutationDeclineChannelInvitationArgs
  >;

  const args: MutationDeclineChannelInvitationArgs = {
    channelInvitationId,
    reasonTextId: reasonTextId as unknown as DeclineChannelInvitationReasonTextId,
  }

  try {
    await client.gql(document).send(args);

    return {
      operation: MutationType.update,
    };
  } catch (error) {
    logger.error('fsdata.declineChannelInvitation: failed', {
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default declineChannelInvitation;
