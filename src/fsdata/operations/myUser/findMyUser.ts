import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

// import { create } from '../../graffle/fsdata/_.js'

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import findMyUserGql from '../../gql/queries/findMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async (): Promise<MyUser | null> => {
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

  const document = parse(findMyUserGql) as TypedQueryDocumentNode<{
    findMyUser: MyUser | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send()) as { findMyUser: MyUser | null };

    if (!response.findMyUser) {
      return null;
    }

    return new MyUser(response.findMyUser);
  } catch (error) {
    logger.error('findMyUser failed.', { error, headers: helpers.headers() });
    return null;
  }
};

export default findMyUser;
