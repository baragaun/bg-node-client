import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { SignUpUserInput } from '../../../types/SignUpUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
import { MutationSignUpUserArgs } from '../../gql/graphql.js';
import signUpUserGql from '../../gql/mutations/signUpUser.graphql.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = { signUpUser: UserAuthResponse };

// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (
  input: SignUpUserInput,
): Promise<QueryResult<UserAuthResponse>> => {
  if (!libData.isInitialized()) {
    logger.error('signUpUser: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create()
    .transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  input.checkAvailable = true;

  const document = parse(signUpUserGql) as TypedQueryDocumentNode<
    ResponseDataType,
    MutationSignUpUserArgs
  >;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ input })) as ResponseDataType;

    logger.debug('SignUpUser response:', response);

    return { object: response.signUpUser };
  } catch (error) {
    logger.error('SignUpUser mutation error:', { input, error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default signUpUser;
