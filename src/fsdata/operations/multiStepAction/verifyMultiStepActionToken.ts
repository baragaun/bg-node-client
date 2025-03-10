import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import { VerifyMultiStepActionTokenInput } from '../../../types/models/VerifyMultiStepActionTokenInput.js';
import { MutationVerifyMultiStepActionTokenArgs } from '../../gql/graphql.js';
import gqlText from '../../gql/mutations/verifyMultiStepActionToken.graphql.js';
import helpers from '../../helpers/helpers.js';

type VerifyMultiStepActionTokenResponse = {
  verifyMultiStepActionToken: SidMultiStepActionProgress;
};

// see: https://graffle.js.org/guides/topics/requests
const verifyMultiStepActionToken = async (
  input: VerifyMultiStepActionTokenInput,
): Promise<SidMultiStepActionProgress> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  try {
    const client = Graffle.create().transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry());

    const document = parse(gqlText) as TypedQueryDocumentNode<
      VerifyMultiStepActionTokenResponse,
      MutationVerifyMultiStepActionTokenArgs
    >;

    console.log('Sending verifyMultiStepActionToken mutation with input:', input);

    const response = await client.gql(document).send({ input });

    console.log('verifyMultiStepActionToken response:', response);

    return response.verifyMultiStepActionToken;
  } catch (error) {
    console.error('verifyMultiStepActionToken mutation error:', error);
    throw error;
  }
};

export default verifyMultiStepActionToken;
