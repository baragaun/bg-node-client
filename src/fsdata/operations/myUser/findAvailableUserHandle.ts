import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { QueryFindAvailableUserHandleArgs } from '../../gql/graphql.js';
import gql from '../../gql/queries/findAvailableUserHandle.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { findAvailableUserHandle: string };

// see: https://graffle.js.org/guides/topics/requests
const findAvailableUserHandle = async (
  startValue: string,
): Promise<QueryResult<string>> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
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
    QueryFindAvailableUserHandleArgs
  >;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ startValue })) as ResponseDataType;

    return { object: response.findAvailableUserHandle };
  } catch (error) {
    logger.error('findAvailableUserHandle failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findAvailableUserHandle;
