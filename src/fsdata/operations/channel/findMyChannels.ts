import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { FindObjectsOptions, InputMaybe, QueryFindMyChannelsArgs } from '../../gql/graphql.js';
import gql from '../../gql/queries/findMyChannels.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { findMyChannels: Channel[] | null };

// see: https://graffle.js.org/guides/topics/requests
const findMyChannels = async (
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
    QueryFindMyChannelsArgs
  >;

  const args: QueryFindMyChannelsArgs = {
    options: options as unknown as InputMaybe<FindObjectsOptions>,
  };

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send(args)) as ResponseDataType;

    logger.debug('fsdata.findMyChannels: response received.', response);

    return {
      objects: response.findMyChannels.map((channel) => new Channel(channel)),
    }
  } catch (error) {
    logger.error('fsdata.findMyChannels: error', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default findMyChannels;
