import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
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
        field: 'findChannelParticipantById',
        selections: modelFields.sidMultiStepAction,
    },
    [ModelType.SidMultiStepActionProgress]: {
        field: 'findChannelParticipantById',
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
const deleteObject = async (id, modelType) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.deleteObject: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const fieldDef = _fieldDef[modelType];
        if (!fieldDef) {
            logger.error('fsdata.deleteObject: invalid modelType provided', { modelType });
            return { error: 'invalid-model-type' };
        }
        const args = fieldDef.skipVars ? {} : { $: { id } };
        logger.debug('fsdata.deleteObject: sending.', { args });
        const response = await client.mutation[fieldDef.field](args);
        logger.debug('fsdata.deleteObject: response received.', { response, object: response.data[fieldDef.field] });
        if (response.errors) {
            logger.error('fsdata.deleteObject: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data[fieldDef.field]) {
            logger.error('fsdata.deleteObject: not found.');
            return { error: 'not-found' };
        }
        return {};
    }
    catch (error) {
        logger.error('deleteObject: error', { error, headers: helpers.headers() });
        return null;
    }
};
export default deleteObject;
//# sourceMappingURL=deleteObject.js.map