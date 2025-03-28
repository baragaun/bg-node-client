import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInput,
  ChannelListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindChannelsArgs,
} from '../../gql/graphql.js';
import gql from '../../gql/queries/findChannels.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { findChannels: Channel[] | null };

// see: https://graffle.js.org/guides/topics/requests
const findChannels = async (
  filter: ChannelListFilter | undefined,
  match: Partial<Channel> | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<Channel>> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
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
    QueryFindChannelsArgs
  >;

  const args: QueryFindChannelsArgs = {
    filter,
    match: match as unknown as InputMaybe<ChannelInput>,
    options: options as unknown as InputMaybe<FindObjectsOptions>,
  };

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send(args)) as ResponseDataType;

    logger.debug('fsdata.findChannels: response received.', response);

    return {
      objects: response.findChannels.map((channel) => new Channel(channel)),
    }
  } catch (error) {
    logger.error('fsdata.findChannels: error', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default findChannels;
