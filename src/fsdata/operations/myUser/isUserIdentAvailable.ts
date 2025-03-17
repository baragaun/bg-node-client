import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

// import { create } from '../../graffle/fsdata/_.js'

import { UserIdentType as UserIdentTypeFromClient } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import {
  QueryIsUserIdentAvailableArgs,
  UserIdentType,
} from '../../gql/graphql.js';
import isUserIdentAvailableGql from '../../gql/queries/isUserIdentAvailable.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const isUserIdentAvailable = async (
  userIdent: string,
  identType: UserIdentTypeFromClient,
): Promise<boolean> => {
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

  const document = parse(isUserIdentAvailableGql) as TypedQueryDocumentNode<
    { isUserIdentAvailable: boolean },
    QueryIsUserIdentAvailableArgs
  >;

  const args: QueryIsUserIdentAvailableArgs = {
    ident: userIdent,
    identType: identType as unknown as UserIdentType,
  };

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send(args)) as { isUserIdentAvailable: boolean };

    if (!response.isUserIdentAvailable) {
      return null;
    }

    return response.isUserIdentAvailable;
  } catch (error) {
    logger.error('isUserIdentAvailable failed.', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default isUserIdentAvailable;
