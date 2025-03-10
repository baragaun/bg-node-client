import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import data from '../../../helpers/data.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import { MyUser } from '../../../types/models/MyUser.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { MutationUpdateMyUserArgs, MyUserInput } from '../../gql/graphql.js';
import gql from '../../gql/mutations/updateMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
import findMyUser from './findMyUser.js';

type UpdateMyUserResponse = { updateMyUser: string };

// see: https://graffle.js.org/guides/topics/requests
const updateMyUser = async (
  changes: Partial<MyUser>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MyUser | null> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const client = Graffle.create().transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry());

    const document = parse(gql) as TypedQueryDocumentNode<
      UpdateMyUserResponse,
      MutationUpdateMyUserArgs
    >;
    let oldUpdatedAt = changes.updatedAt;

    if (!oldUpdatedAt) {
      const { object: cachedUser } = await db.findById<MyUser>(changes.id, ModelType.MyUser);

      if (cachedUser && cachedUser.updatedAt) {
        oldUpdatedAt = cachedUser.updatedAt;
      }
    }

    const response = await client.gql(document).send({ input: changes as unknown as MyUserInput });

    if (!response.updateMyUser) {
      console.error('fsdata.updateMyUser: mutation did not return a valid response.');
      return null;
    }

    if (oldUpdatedAt) {
      if (queryOptions.polling) {
        queryOptions.polling.oldUpdatedAt = oldUpdatedAt;
      } else {
        queryOptions.polling = {
          isInTargetStateFunc: 'watch-updated-at',
          oldUpdatedAt,
        };
      }

      return pollForUpdatedObject<MyUser>(changes.id, ModelType.MyUser, queryOptions);
    }

    return findMyUser();
  } catch (error) {
    console.error('fsdata.updateMyUser: failed with error', { error, headers: helpers.headers() });
    return null;
  }
};

export default updateMyUser;
