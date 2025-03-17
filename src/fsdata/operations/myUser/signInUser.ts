import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SignInUserInput as SignInUserInputFromClient } from '../../../types/SignInUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
import { MutationSignInUserArgs, SignInUserInput } from '../../gql/graphql.js';
import gql from '../../gql/mutations/signInUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (
  input: SignInUserInputFromClient,
): Promise<UserAuthResponse> => {
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

  const document = parse(gql) as TypedQueryDocumentNode<
    { signInUser: UserAuthResponse },
    MutationSignInUserArgs
  >;

  logger.debug('fsdata.SignInUser: sending request.', {
    input,
    headers: helpers.headers(),
  });

  try {
    const response = (await client
      .gql(document)
      .send({ input: input as unknown as SignInUserInput })) as {
      signInUser: UserAuthResponse;
    };

    return response.signInUser;
  } catch (error) {
    logger.error('fsdata.SignInUser: failed', {
      input,
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default SignInUser;
