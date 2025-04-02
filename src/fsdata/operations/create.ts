import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { BaseModel } from '../../models/BaseModel.js';
import modelFactory from '../../models/modelFactory.js';
import { QueryResult } from '../../types/QueryResult.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import modelFields from '../helpers/modelFields.js';

const _fieldDef = {
  [ModelType.Channel]: {
    field: 'createChannel',
    selections: modelFields.channel,
  },
  [ModelType.ChannelInvitation]: {
    field: 'createChannelInvitation',
    selections: modelFields.channelInvitation,
  },
  [ModelType.ChannelMessage]: {
    field: 'createChannelMessage',
    selections: modelFields.channelMessage,
  },
  [ModelType.ChannelParticipant]: {
    field: 'createChannelParticipant',
    selections: modelFields.channelParticipant,
  },
  [ModelType.SidMultiStepAction]: {
    field: 'createChannelParticipant',
    selections: modelFields.sidMultiStepAction,
  },
  [ModelType.SidMultiStepActionProgress]: {
    field: 'createChannelParticipant',
    selections: modelFields.sidMultiStepActionProgress,
  },
  [ModelType.MyUser]: {
    field: 'createMy',
    selections: modelFields.myUser,
    skipVars: true,
  },
  [ModelType.User]: {
    field: 'createUser',
    selections: modelFields.user,
  },
};

const create = async <T extends BaseModel = BaseModel>(
  props: Partial<T>,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.create: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const fieldDef = _fieldDef[modelType];
    const args = { input: props };

    if (!fieldDef) {
      logger.error('fsdata.findById: invalid modelType provided', { modelType });
      return { error: 'invalid-model-type' };
    }

    const response = await client.mutation.create({ $: args, ...fieldDef.selections });

    logger.debug('fsdata.create response:', { response });

    return {
      object: response.data.create
        ? modelFactory<T>(response.data[fieldDef.field], modelType)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.create: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default create;
