import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../helpers/data.js';
import { SidMultiStepActionProgress } from '../gql/graphql.js';
import helpers from '../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const startVerifyEmail = async (input: string): Promise<SidMultiStepActionProgress> => {
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
    mutation StartVerifyEmail($email: String!) {
      startVerifyEmail(email: $email) {
        actionId
        actionStatus
        actionType
        attemptCount
        authTokenExpiresAt
        authToken
        expiresAt
        result
        createdAt
      }
    }
  `) as TypedQueryDocumentNode<{ startVerifyEmail: SidMultiStepActionProgress }, string>;

  try {
    console.log('Sending startVerifyEmail mutation with input:', input);

    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ input })) as { startVerifyEmail: SidMultiStepActionProgress };

    console.log('startVerifyEmail response:', response);

    return response.startVerifyEmail;
  } catch (error) {
    console.error('startVerifyEmail mutation error:', error);
    throw error;
  }
};

export default startVerifyEmail;
