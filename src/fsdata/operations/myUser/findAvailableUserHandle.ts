import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

// import { create } from '../../graffle/fsdata/_.js'

import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import { QueryFindAvailableUserHandleArgs } from '../../gql/graphql.js';
import gql from '../../gql/queries/findAvailableUserHandle.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findAvailableUserHandle = async (startValue: string): Promise<string> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<
    { findAvailableUserHandle: string },
    QueryFindAvailableUserHandleArgs
  >;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ startValue })) as { findAvailableUserHandle: string };

    if (!response.findAvailableUserHandle) {
      return null;
    }

    return response.findAvailableUserHandle;
  } catch (error) {
    logger.error('findAvailableUserHandle failed.', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default findAvailableUserHandle;
