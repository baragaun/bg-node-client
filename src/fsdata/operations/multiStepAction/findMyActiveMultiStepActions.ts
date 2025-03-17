import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepAction } from '../../../types/models/SidMultiStepAction.js';
import gql from '../../gql/queries/findMyActiveMultiStepActions.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findMyActiveMultiStepActions = async (): Promise<
  SidMultiStepAction[] | null
> => {
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
    findMyActiveMultiStepActions: SidMultiStepAction[] | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send()) as { findMyActiveMultiStepActions: SidMultiStepAction[] | null };

    logger.debug('fsdata.findMyActiveMultiStepAction: response received.', response);

    return response.findMyActiveMultiStepActions;
  } catch (error) {
    logger.error('fsdata.findMyActiveMultiStepActions: error', {
      error,
      headers: helpers.headers(),
    });
    return null;
  }
};

export default findMyActiveMultiStepActions;
