import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { MyUser } from '../../types/models/MyUser.js';
import helpers from '../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async (): Promise<MyUser> => {
  const config = helpers.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: helpers.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse(`
    query getMyUser {
      getMyUser {
        id
        userHandle
        firstName
        lastName
        email
        updatedAt
      }
    }
  `) as TypedQueryDocumentNode<MyUser>;

  const data = (await client.gql(document).send()) as MyUser;

  console.log(data);

  return data;
};

export default findMyUser;
