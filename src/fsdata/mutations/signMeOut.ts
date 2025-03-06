import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const signMeOut = async (): Promise<void> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: data.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse('mutation M { signMeOut }') as TypedQueryDocumentNode<string>;

  try {
    const response = await client.gql(document).send();
    console.log('SignOutUser response:', response);
  } catch (error) {
    console.error('SignOutUser mutation error:', error);
    throw error;
  }
};

export default signMeOut;
