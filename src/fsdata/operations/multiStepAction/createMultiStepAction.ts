import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  MutationCreateMultiStepActionArgs,
  SidMultiStepActionInput,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/createMultiStepAction.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const createMultiStepAction = async (
  input: SidMultiStepActionInput,
): Promise<QueryResult<SidMultiStepActionProgress>> => {
  if (!libData.isInitialized()) {
    logger.error('createMultiStepAction: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create().transport({
    url: libData.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry())

  const document = parse(gql) as TypedQueryDocumentNode<
    { createMultiStepAction: SidMultiStepActionProgress },
    MutationCreateMultiStepActionArgs
  >;

  try {
    const response = (await client.gql(document).send({ input })) as {
      createMultiStepAction: SidMultiStepActionProgress;
    };

    return { object: response.createMultiStepAction };
  } catch (error) {
    logger.error('fsdata.createMultiStepAction: failed', { error, headers: helpers.headers() });
    return { error: error.message };
  }
};

export default createMultiStepAction;
