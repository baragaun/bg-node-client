import { parse, type TypedQueryDocumentNode } from 'graphql';

import { SignUpUserInput, UserAuthResponse } from '../gql/graphql.js';
import { createGraffleClient } from '../utils/createGraffleClient.js';

type Document = TypedQueryDocumentNode<UserAuthResponse, SignUpUserInput>;

// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input: SignUpUserInput): Promise<UserAuthResponse> => {
  const graffle = createGraffleClient();
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

  try {
    console.log('Sending signUpUser mutation with input:', input);
    const data = (await graffle.gql(document).send({ input })) as UserAuthResponse;
    console.log('SignUpUser response:', data);
    return data;
  } catch (error) {
    console.error('SignUpUser mutation error:', error);
    throw error;
  }
};

export default signUpUser;
