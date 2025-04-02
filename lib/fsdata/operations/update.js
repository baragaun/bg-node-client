import findById from './findById.js';
import pollForUpdatedObject from './pollForUpdatedObject.js';
import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import modelFields from '../helpers/modelFields.js';
const _fieldDef = {
    [ModelType.Channel]: {
        field: 'updateChannel',
        selections: modelFields.channel,
    },
    [ModelType.ChannelInvitation]: {
        field: 'updateInvitation',
        selections: modelFields.channelInvitation,
    },
    [ModelType.ChannelMessage]: {
        field: 'updateMessage',
        selections: modelFields.channelMessage,
    },
    [ModelType.ChannelParticipant]: {
        field: 'updateParticipant',
        selections: modelFields.channelParticipant,
    },
    [ModelType.SidMultiStepAction]: {
        field: 'updateMultiStepAction',
        selections: modelFields.sidMultiStepAction,
    },
    [ModelType.MyUser]: {
        field: 'updateMyUser',
        selections: modelFields.myUser,
        skipVars: true,
    },
    [ModelType.User]: {
        field: 'updateUser',
        selections: modelFields.user,
    },
};
/**
 * Updates an object through the GraphQL API. It performs the following steps:
 * Returns the result of the update or polling operation.
 * @param changes
 * @param modelType
 * @param queryOptions
 */
const update = async (changes, modelType, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.update: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const fieldDef = _fieldDef[modelType];
        if (!queryOptions) {
            queryOptions = defaultQueryOptionsForMutations;
        }
        if (!fieldDef) {
            logger.error('fsdata.update: invalid modelType provided', { modelType });
            return { error: 'invalid-model-type' };
        }
        const needOldUpdatedAt = !!queryOptions.polling &&
            typeof queryOptions.polling.isInTargetStateFunc !== 'function';
        let oldUpdatedAt = changes.updatedAt;
        if (needOldUpdatedAt && !oldUpdatedAt) {
            logger.debug('fsdata.update: have no oldUpdatedAt; reading from local.');
            const findLocalResult = await db.findUpdatedAt(changes.id, modelType);
            if (!findLocalResult.error && findLocalResult.object) {
                logger.debug('fsdata.update: setting oldUpdatedAt to the cached object.updatedAt.');
                oldUpdatedAt = findLocalResult.object;
            }
            if (needOldUpdatedAt && !oldUpdatedAt) {
                logger.debug('fsdata.update: have no oldUpdatedAt; reading from network.');
                const findOnNetworkResult = await findById(changes.id, modelType, { updatedAt: true });
                if (findOnNetworkResult.error || !findOnNetworkResult.object?.updatedAt) {
                    logger.debug('fsdata.update: failed to find object on network.', { findOldObjResult: findOnNetworkResult });
                }
                else {
                    logger.debug('fsdata.update: setting oldUpdatedAt to remote object.updatedAt.');
                    oldUpdatedAt = findOnNetworkResult.object.updatedAt;
                }
            }
        }
        const args = { input: changes };
        logger.debug('fsdata.update: sending.', { args });
        const updateResponse = await client.mutation[fieldDef.field]({ $: args });
        logger.debug('fsdata.update response:', { response: updateResponse });
        if (updateResponse.errors) {
            logger.error('fsdata.update: failed with error', { error: updateResponse.errors });
            return { error: updateResponse.errors.map(e => e.message).join(', ') };
        }
        if (!updateResponse.data[fieldDef.field]) {
            logger.error('fsdata.update: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        if (!queryOptions || !queryOptions.polling || queryOptions.polling.enabled === false) {
            return findById(changes.id, modelType);
        }
        if (needOldUpdatedAt && !queryOptions.polling.oldUpdatedAt) {
            if (queryOptions.polling) {
                queryOptions.polling.oldUpdatedAt = oldUpdatedAt;
            }
            else {
                queryOptions.polling = {
                    enabled: true,
                    isInTargetStateFunc: 'watch-updated-at',
                    oldUpdatedAt,
                };
            }
        }
        const pollingResponse = await pollForUpdatedObject(changes.id, modelType, queryOptions);
        logger.debug('fsdata.update: finished.', { pollingResponse });
        return pollingResponse;
    }
    catch (error) {
        logger.error('update: error', { error, headers: helpers.headers() });
        return null;
    }
};
export default update;
//# sourceMappingURL=update.js.map