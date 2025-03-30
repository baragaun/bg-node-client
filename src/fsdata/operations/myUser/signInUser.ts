import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { SignInUserInput as SignInUserInputFromClient } from '../../../types/SignInUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
import { MutationSignInUserArgs, SignInUserInput } from '../../gql/graphql.js';
import gql from '../../gql/mutations/signInUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (
  input: SignInUserInputFromClient,
): Promise<QueryResult<UserAuthResponse>> => {
  if (!libData.isInitialized()) {
    logger.error('SignInUser: unavailable');
    return { error: 'unavailable' };
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

    return { object: response.signInUser };
  } catch (error) {
    logger.error('fsdata.SignInUser: failed', { input, error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default SignInUser;
