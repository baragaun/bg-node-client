import { Graffle } from 'graffle';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import {
  MutationCreateMultiStepActionArgs,
  SidMultiStepActionInput,
} from '../../gql/graphql.js';
import gql from '../../gql/mutations/createMultiStepAction.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const createMultiStepAction = async (
  input: SidMultiStepActionInput,
): Promise<SidMultiStepActionProgress> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: data.config().fsdata.url,
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

    return response.createMultiStepAction;
  } catch (error) {
    console.error('fsdata.createMultiStepAction: failed', error);
    throw error;
  }
};

export default createMultiStepAction;
