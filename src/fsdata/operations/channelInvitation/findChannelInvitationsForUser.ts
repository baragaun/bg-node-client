import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { ChannelInvitationDirection as ChannelInvitationDirectionFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInvitationDirection,
  FindObjectsOptions,
  InputMaybe,
  QueryFindChannelInvitationsForUserArgs,
} from '../../gql/graphql.js';
import gql from '../../gql/queries/findChannelInvitationsForUser.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { findChannelInvitationsForUser: Channel[] | null };

// see: https://graffle.js.org/guides/topics/requests
const findChannelInvitationsForUser = async (
  userId: string,
  onlyUnseen: boolean,
  onlyPending: boolean,
  direction: ChannelInvitationDirectionFromClient,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('findChannelInvitationsForUser: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create()
    .transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<
    ResponseDataType,
    QueryFindChannelInvitationsForUserArgs
  >;

  const args: QueryFindChannelInvitationsForUserArgs = {
    userId,
    onlyUnseen,
    onlyPending,
    direction: direction as unknown as ChannelInvitationDirection,
    options: options as unknown as InputMaybe<FindObjectsOptions>,
  };

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send(args)) as ResponseDataType;

    logger.debug('fsdata.findChannelInvitationsForUser: response received.', response);

    return {
      objects: response.findChannelInvitationsForUser.map((channel) => new Channel(channel)),
    }
  } catch (error) {
    logger.error('fsdata.findChannelInvitationsForUser: error',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelInvitationsForUser;
