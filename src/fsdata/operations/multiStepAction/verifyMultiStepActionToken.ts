import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
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
  actionId: string,
  confirmToken: string,
  newPassword?: string,
): Promise<SidMultiStepActionProgress> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  try {
    const client = Graffle.create().transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry());

    const document = parse(gqlText) as TypedQueryDocumentNode<
      VerifyMultiStepActionTokenResponse,
      MutationVerifyMultiStepActionTokenArgs
    >;

    const input: VerifyMultiStepActionTokenInput = {
      actionId,
      token: confirmToken,
      newPassword,
    };

    logger.debug(
      'Sending verifyMultiStepActionToken mutation with input:',
      input,
    );

    const response = await client.gql(document).send({ input });

    logger.debug('verifyMultiStepActionToken response:', response);

    return response.verifyMultiStepActionToken;
  } catch (error) {
    logger.error('verifyMultiStepActionToken mutation error:', {
      error,
      headers: helpers.headers(),
    });
    throw error;
  }
};

export default verifyMultiStepActionToken;
