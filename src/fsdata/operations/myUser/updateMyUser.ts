import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { MyUser } from '../../../types/models/MyUser.js';
import gql from '../../gql/mutations/updateMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';

// see: https://graffle.js.org/guides/topics/requests
const updateMyUser = async (): Promise<MyUser | null> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<{ updateMyUser: MyUser | null }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send()) as { updateMyUser: MyUser | null };

    if (!response.updateMyUser) {
      return null;
    }

    return new MyUser(response.updateMyUser);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateMyUser;
