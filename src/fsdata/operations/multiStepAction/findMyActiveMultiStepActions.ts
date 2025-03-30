import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepAction } from '../../../models/SidMultiStepAction.js';
import { QueryResult } from '../../../types/QueryResult.js';
import gql from '../../gql/queries/findMyActiveMultiStepActions.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const findMyActiveMultiStepActions = async (): Promise<
  QueryResult<SidMultiStepAction>
> => {
  if (!libData.isInitialized()) {
    logger.error('findMyActiveMultiStepActions: unavailable');
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
    findMyActiveMultiStepActions: SidMultiStepAction[] | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send()) as { findMyActiveMultiStepActions: SidMultiStepAction[] | null };

    logger.debug('fsdata.findMyActiveMultiStepAction: response received.', response);

    return { objects: response.findMyActiveMultiStepActions };
  } catch (error) {
    logger.error('fsdata.findMyActiveMultiStepActions: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyActiveMultiStepActions;
