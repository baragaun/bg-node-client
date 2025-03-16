import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import gql from '../../gql/queries/getMultiStepActionProgress.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const getMultiStepActionProgress = async (
  actionId: string,
  confirmToken: string | undefined,
): Promise<SidMultiStepActionProgress | null> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<{
    getMultiStepActionProgress: SidMultiStepActionProgress | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ actionId, confirmToken })) as {
      getMultiStepActionProgress: SidMultiStepActionProgress | null;
    };

    return response.getMultiStepActionProgress;
  } catch (error) {
    logger.error('fsdata.getMultiStepActionProgress: error', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default getMultiStepActionProgress;
