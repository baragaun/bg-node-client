import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
import gql from '../../gql/queries/getMultiStepActionProgress.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const getMultiStepActionProgress = async (
  actionId: string,
  confirmToken: string | undefined,
): Promise<QueryResult<SidMultiStepActionProgress>> => {
  if (!libData.isInitialized()) {
    logger.error('getMultiStepActionProgress: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create()
    .transport({
      url: libData.config().fsdata.url,
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

    return { object: response.getMultiStepActionProgress };
  } catch (error) {
    logger.error('fsdata.getMultiStepActionProgress: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default getMultiStepActionProgress;
