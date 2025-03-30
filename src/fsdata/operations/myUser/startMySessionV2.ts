import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

// import { create } from '../../graffle/fsdata/_.js'

import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ContentStatus } from '../../../models/ContentStatus.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationStartMySessionV2Args } from '../../gql/graphql.js';
import gql from '../../gql/mutations/startMySessionV2.graphql.js';
import helpers from '../../helpers/helpers.js';

type StartMySessionResponse = { startMySessionV2: ContentStatus };

// see: https://graffle.js.org/guides/topics/requests
const startMySessionV2 = async (): Promise<QueryResult<ContentStatus>> => {
  if (!libData.isInitialized()) {
    logger.error('startMySessionV2: unavailable');
    return { error: 'unavailable' };
  }

  const client = Graffle.create()
    .transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<
    StartMySessionResponse,
    MutationStartMySessionV2Args
  >;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ returnContentStatus: true })) as { startMySessionV2: ContentStatus };

    if (!response.startMySessionV2) {
      logger.error('fsdata.startMySessionV2: no valid response received.');
      return { error: 'system-error' };
    }

    return { object: new ContentStatus(response.startMySessionV2) };
  } catch (error) {
    logger.error('startMySessionV2 failed.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default startMySessionV2;
