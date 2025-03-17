import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import signMeOutGql from '../../gql/mutations/signMeOut.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const signMeOut = async (): Promise<void> => {
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

  const document = parse(signMeOutGql) as TypedQueryDocumentNode<string>;

  try {
    const response = await client.gql(document).send();
    logger.debug('SignOutUser response:', response);
  } catch (error) {
    logger.error('SignOutUser mutation error:', {
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default signMeOut;
