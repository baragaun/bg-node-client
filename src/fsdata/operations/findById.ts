import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Model } from '../../models/Model.js';
import modelFactory from '../../models/modelFactory.js';
import findChannelById from '../gql/queries/findChannelById.graphql.js';
import findChannelInvitationById from '../gql/queries/findChannelInvitationById.graphql.js';
import findChannelMessageById from '../gql/queries/findChannelMessageById.graphql.js';
import findChannelParticipantById from '../gql/queries/findChannelParticipantById.graphql.js';
import findMyUser from '../gql/queries/findMyUser.graphql.js';
import findUserById from '../gql/queries/findUserById.graphql.js';
import helpers from '../helpers/helpers.js';

const _fieldDef = {
  [ModelType.Channel]: { field: 'findChannelById', gql: findChannelById },
  [ModelType.ChannelInvitation]: {
    field: 'findChannelInvitationById',
    gql: findChannelInvitationById,
  },
  [ModelType.ChannelMessage]: {
    field: 'findChannelMessageById',
    gql: findChannelMessageById,
  },
  [ModelType.ChannelParticipant]: {
    field: 'findChannelParticipantById',
    gql: findChannelParticipantById,
  },
  [ModelType.MyUser]: { field: 'findMyUser', gql: findMyUser, skipVars: true },
  [ModelType.User]: { field: 'findUserById', gql: findUserById },
};

// see: https://graffle.js.org/guides/topics/requests
const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
): Promise<T | null> => {
  const config = libData.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create().transport({
    url: libData.config().fsdata.url,
    headers: helpers.headers(),
  });
  // .use(Throws())
  // .use(Opentelemetry());

  const fieldDef = _fieldDef[modelType];

  const document = parse(fieldDef.gql) as TypedQueryDocumentNode<{
    // @ts-ignore
    [fieldDef.field]: T | null;
  }>;
  const variables = modelType === ModelType.MyUser ? {} : { id };

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      // @ts-ignore
      .send(variables)) as { [fieldDef.field]: T | null };

    logger.debug('findById: response received', { response });

    if (!response[fieldDef.field]) {
      return null;
    }

    return modelFactory<T>(response[fieldDef.field], modelType);
  } catch (error) {
    logger.error('findById: error', { error, headers: helpers.headers() });
    return null;
  }
};

export default findById;
