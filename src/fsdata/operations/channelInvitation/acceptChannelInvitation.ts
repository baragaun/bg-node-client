import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { MutationType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationAcceptChannelInvitationArgs,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/acceptChannelInvitation.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { acceptChannelInvitation: string };

// see: https://graffle.js.org/guides/topics/requests
const acceptChannelInvitation = async (
  channelInvitationId: string,
): Promise<QueryResult<void>> => {
  if (!libData.isInitialized()) {
    logger.error('acceptChannelInvitation: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create().transport({
    url: libData.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse(gql) as TypedQueryDocumentNode<
    ResponseDataType,
    MutationAcceptChannelInvitationArgs
  >;

  try {
    await client.gql(document).send({ channelInvitationId });

    return {
      operation: MutationType.update,
    };
  } catch (error) {
    logger.error('fsdata.acceptChannelInvitation: failed', {
      error,
      headers: helpers.headers(),
    });
    return { error: (error as Error).message };
  }
};

export default acceptChannelInvitation;
