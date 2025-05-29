import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import modelFactory from '../../models/modelFactory.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import modelFields from '../helpers/modelFields.js';
const _fieldDef = {
    [ModelType.Channel]: {
        field: 'findChannelById',
        selections: modelFields.channel,
    },
    [ModelType.ChannelInvitation]: {
        field: 'findChannelInvitationById',
        selections: modelFields.channelInvitation,
    },
    [ModelType.ChannelMessage]: {
        field: 'findChannelMessageById',
        selections: modelFields.channelMessage,
    },
    [ModelType.ChannelParticipant]: {
        field: 'findChannelParticipantById',
        selections: modelFields.channelParticipant,
    },
    [ModelType.SidMultiStepAction]: {
        field: '', // todo
        selections: modelFields.sidMultiStepAction,
    },
    [ModelType.SidMultiStepActionProgress]: {
        field: 'getMultiStepActionProgress',
        keyFieldName: 'actionId',
        selections: modelFields.sidMultiStepActionProgress,
    },
    [ModelType.MyUser]: {
        field: 'findMyUser',
        selections: modelFields.myUser,
        skipVars: true,
    },
    [ModelType.User]: {
        field: 'findUserById',
        selections: modelFields.user,
    },
};
const findById = async (id, modelType, selections) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findById: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const fieldDef = _fieldDef[modelType];
        if (!fieldDef) {
            logger.error('fsdata.findById: invalid modelType provided', { modelType });
            return { error: 'invalid-model-type' };
        }
        const args = fieldDef.skipVars
            ? {}
            : { $: { [fieldDef.keyFieldName || 'id']: id } };
        logger.debug('fsdata.findById: sending.', { args });
        const response = await client.query[fieldDef.field]({
            ...args,
            ...(selections || fieldDef.selections),
        });
        logger.debug('fsdata.findById: response received.', { response, object: JSON.stringify(response.data[fieldDef.field]) });
        if (response.errors) {
            logger.error('fsdata.findById: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data[fieldDef.field]) {
            logger.error('fsdata.findById: not found.');
            return { error: 'not-found' };
        }
        return { object: modelFactory(response.data[fieldDef.field], modelType) };
    }
    catch (error) {
        logger.error('findById: error', { error, headers: helpers.headers() });
        return null;
    }
};
export default findById;
//# sourceMappingURL=findById.js.map