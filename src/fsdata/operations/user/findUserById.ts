import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../types/models/MyUser.js';
import findUserByIdGql from '../../gql/queries/findUserById.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findUserById = async (): Promise<MyUser | null> => {
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

  const document = parse(findUserByIdGql) as TypedQueryDocumentNode<{
    findMyUser: MyUser | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send()) as { findMyUser: MyUser | null };

    logger.debug('fsdata.findUserById: response received.', response);

    return response.findMyUser;
  } catch (error) {
    logger.error('fsdata.findMyUser: error', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default findUserById;
