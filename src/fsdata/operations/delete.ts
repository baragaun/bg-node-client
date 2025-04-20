import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { QueryResult } from '../../types/QueryResult.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';

const _fieldDef = {
  [ModelType.Channel]: {
    field: 'deleteChannel',
    keyFieldName: 'channelId',
  },
  [ModelType.ChannelInvitation]: {
    field: 'deleteChannelInvitation',
    keyFieldName: 'channelInvitationId',
  },
  [ModelType.ChannelMessage]: {
    field: 'deleteChannelMessage',
    keyFieldName: 'channelMessageId',
  },
  [ModelType.ChannelParticipant]: {
    field: 'deleteChannelParticipant',
    keyFieldName: 'channelParticipantId',
  },
  [ModelType.SidMultiStepAction]: {
    field: '',
  },
  [ModelType.MyUser]: {
    field: 'deleteMyUser',
    keyFieldName: '',
  },
  [ModelType.User]: {
    field: 'deleteUser',
    keyFieldName: 'userId',
  },
};

const deleteFnc = async (
  id: string,
  modelType: ModelType,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.delete: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const fieldDef = _fieldDef[modelType];

    if (!fieldDef) {
      logger.error('fsdata.delete: invalid modelType provided', { modelType });
      return { error: 'invalid-model-type' };
    }

    const args = { $: { deletePhysically: true } };

    if (fieldDef.keyFieldName) {
      args['$'][fieldDef.keyFieldName] = id;
    }

    logger.debug('fsdata.delete: sending.', { args });

    const response = await client.mutation[fieldDef.field](args);

    logger.debug('fsdata.delete: response received.', { response });

    if (response.errors) {
      logger.error('fsdata.delete: failed with error', { error: response.errors });
      return { error: response.errors.map(e => e.message).join(', ')};
    }

    if (response.data[fieldDef.field] !== id) {
      logger.error('fsdata.delete: invalid response.');
      return { error: 'system-error' };
    }

    return {};
  } catch (error) {
    logger.error('delete: error', { error, headers: helpers.headers() });
    return null;
  }
};

export default deleteFnc;
