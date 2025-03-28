import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

// import { create } from '../../graffle/fsdata/_.js'

import clientInfoStore from '../../../helpers/clientInfoStore.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MutationDeleteMyUserArgs } from '../../gql/graphql.js';
import deleteMyUserGql from '../../gql/mutations/deleteMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<void> => {
  const clientInfo = clientInfoStore.get();
  const myUserId = clientInfo.myUserId;
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(deleteMyUserGql) as TypedQueryDocumentNode<
    { deleteMyUser: string },
    MutationDeleteMyUserArgs
  >;
  let ok = false;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ cause, description, deletePhysically })) as {
      deleteMyUser: string;
    };

    ok = response.deleteMyUser === myUserId;
  } catch (error) {
    logger.error('deleteMyUser failed.',
      { error: error.messages, stack: error.stack, headers: helpers.headers() });
    return null;
  }

  if (!ok) {
    logger.error('deleteMyUser: backend did not send userId.');
    throw new Error('system-error');
  }
};

export default deleteMyUser;
