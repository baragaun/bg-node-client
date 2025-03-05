import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { SignInUserInput, UserAuthResponse } from '../gql/graphql.js';
import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input: SignInUserInput): Promise<UserAuthResponse> => {
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

  const document = parse(`
    mutation SignInUser ($input: SignInUserInput!) {
      signInUser (input: $input) {
        id
        authToken
      }
    }
  `) as TypedQueryDocumentNode<UserAuthResponse, SignInUserInput>;

  const userAuthResponse = (await client.gql(document).send(input)) as UserAuthResponse;

  console.log(userAuthResponse);

  return userAuthResponse;
};

export default SignInUser;
