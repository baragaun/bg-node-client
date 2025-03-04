import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { SignUpUserInput, UserAuthResponse } from '../gql/graphql.js';

type Document = TypedQueryDocumentNode<UserAuthResponse, SignUpUserInput>;

// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input: SignUpUserInput): Promise<UserAuthResponse> => {
  const graffle = Graffle.create().transport({
    url: `http://localhost:8092/fsdata/api/graphql`,
  });
  //   // .use(Throws())
  //   // .use(Opentelemetry())

  const document = parse(`
    mutation signUpUser ($input: SignUpUserInput!) {
      signUpUser (input: $input) {
        id
        authToken
      }
    }
  `) as Document;

  const data = (await graffle.gql(document).send(input)) as UserAuthResponse;

  // const endpoint = 'http://localhost:8092/fsdata/api/graphql';
  // const client = new GraphQLClient(endpoint);
  // const data = await client.request(document, { input });

  console.log(data);

  return data;
};

export default signUpUser;
