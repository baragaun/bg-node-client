import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { MutationSignUpUserArgs, SignUpUserInput, UserAuthResponse } from '../../gql/graphql.js';
import signUpUserGql from '../../gql/mutations/signUpUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input: SignUpUserInput): Promise<UserAuthResponse> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  input.checkAvailable = true;

  const document = parse(signUpUserGql) as TypedQueryDocumentNode<
    { signUpUser: UserAuthResponse },
    MutationSignUpUserArgs
  >;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ input })) as { signUpUser: UserAuthResponse };

    console.log('SignUpUser response:', response);

    return response.signUpUser;
  } catch (error) {
    console.error('SignUpUser mutation error:', error);
    throw error;
  }
};

export default signUpUser;
