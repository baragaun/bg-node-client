import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { MyUser } from '../../types/models/MyUser.js';

type Document = TypedQueryDocumentNode<MyUser>;

// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async (): Promise<MyUser> => {
  const graffle = Graffle.create().transport({
    url: `http://localhost:8092/fsdata/api/graphql`,
  });
  //   // .use(Throws())
  //   // .use(Opentelemetry())

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
  `) as Document;

  const data = (await graffle.gql(document).send()) as MyUser;

  // const endpoint = 'http://localhost:8092/fsdata/api/graphql';
  // const client = new GraphQLClient(endpoint);
  // const data = await client.request(document, { input });

  console.log(data);

  return data;
};

export default findMyUser;
