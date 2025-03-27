import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { MutationType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { MutationResult } from '../../../types/MutationResult.js';
import {
  MutationCreateChannelMessageArgs,
  ChannelMessageInput,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/createChannelMessage.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { createChannelMessage: ChannelMessage | null };

// see: https://graffle.js.org/guides/topics/requests
const createChannelMessage = async (
  input: ChannelMessageInput,
): Promise<MutationResult<ChannelMessage>> => {
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
    MutationCreateChannelMessageArgs
  >;

  try {
    const response = (await client.gql(document).send({ input })) as ResponseDataType;

    return {
      operation: MutationType.create,
      object: response.createChannelMessage ? new ChannelMessage(response.createChannelMessage) : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannelMessage: failed', {
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default createChannelMessage;
