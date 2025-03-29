import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { MutationType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationCreateChannelArgs,
  ChannelInput,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/createChannel.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { createChannel: Channel | null };

// see: https://graffle.js.org/guides/topics/requests
const createChannel = async (
  input: ChannelInput,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('createChannel: unavailable');
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
    MutationCreateChannelArgs
  >;

  try {
    const response = (await client.gql(document).send({ input })) as ResponseDataType;

    return {
      operation: MutationType.create,
      object: response.createChannel ? new Channel(response.createChannel) : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannel: failed', {
      error,
      headers: helpers.headers(),
    });
    return { error: (error as Error).message };
  }
};

export default createChannel;
