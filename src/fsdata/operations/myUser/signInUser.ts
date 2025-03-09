import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { MutationSignInUserArgs, SignInUserInput, UserAuthResponse } from '../../gql/graphql.js';
import gql from '../../gql/mutations/signInUser.graphql.js';
import helpers from '../../helpers/helpers.js';

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

  const document = parse(gql) as TypedQueryDocumentNode<
    { signInUser: UserAuthResponse },
    MutationSignInUserArgs
  >;

  try {
    const response = (await client.gql(document).send({ input })) as {
      signInUser: UserAuthResponse;
    };

    return response.signInUser;
  } catch (error) {
    console.error('fsdata.SignInUser: failed', error);
    throw error;
  }
};

export default SignInUser;
