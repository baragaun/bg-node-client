import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../helpers/data.js';
import {
  MutationVerifyMultiStepActionTokenArgs,
  SidMultiStepActionProgress,
  VerifyMultiStepActionTokenInput,
} from '../gql/graphql.js';
import helpers from '../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const verifyMultiStepActionToken = async (
  input: VerifyMultiStepActionTokenInput,
): Promise<SidMultiStepActionProgress> => {
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

  const document = parse(`
    mutation VerifyMultiStepActionToken($input: VerifyMultiStepActionTokenInput!) {
      verifyMultiStepActionToken(input: $input) {
        actionId
        actionStatus
        actionType
        attemptCount
        authToken
        emailVerifiedAt
        expiresAt
        createdAt
        createdBy
      }
    }
  `) as TypedQueryDocumentNode<
    { verifyMultiStepActionToken: SidMultiStepActionProgress },
    MutationVerifyMultiStepActionTokenArgs
  >;

  try {
    console.log('Sending verifyMultiStepActionToken mutation with input:', input);

    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ input })) as { verifyMultiStepActionToken: SidMultiStepActionProgress };

    console.log('verifyMultiStepActionToken response:', response);

    return response.verifyMultiStepActionToken;
  } catch (error) {
    console.error('verifyMultiStepActionToken mutation error:', error);
    throw error;
  }
};

export default verifyMultiStepActionToken;
