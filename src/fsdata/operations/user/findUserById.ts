import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { User } from '../../../models/User.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { FindObjectsOptions, InputMaybe, QueryFindUserByIdArgs } from '../../gql/graphql.js';
import gql from '../../gql/queries/findUserById.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { findUserById: User | null };

// see: https://graffle.js.org/guides/topics/requests
const findUserById = async (
  userId: string,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<User>> => {
  if (!libData.isInitialized()) {
    logger.error('findUserById: unavailable');
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
    QueryFindUserByIdArgs
  >;
  const args: QueryFindUserByIdArgs = {
    id: userId,
    options: options as unknown as InputMaybe<FindObjectsOptions>,
  }

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send(args)) as ResponseDataType;

    logger.debug('fsdata.findUserById: response received.', response);

    return { object: response.findUserById };
  } catch (error) {
    logger.error('fsdata.findMyUser: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findUserById;
