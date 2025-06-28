import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import graffleClientStore from '../helpers/graffleClientStore.js';
import helpers from '../helpers/helpers.js';
import { modelCrudOperations } from '../helpers/modelCrudOperations.js';
const deleteFnc = async (id, modelType, deletePhysically, _queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.delete: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const fieldDef = modelCrudOperations[modelType];
        if (!fieldDef) {
            logger.error('fsdata.delete: invalid modelType provided', { modelType });
            return { error: 'invalid-model-type' };
        }
        const args = { $: { deletePhysically } };
        if (fieldDef.keyFieldName) {
            args['$'][fieldDef.keyFieldName] = id;
        }
        logger.debug('fsdata.delete: sending.', { args });
        const response = await client.mutation[fieldDef.deleteField](args);
        logger.debug('fsdata.delete: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.delete: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data[fieldDef.deleteField]) {
            logger.error('fsdata.delete: invalid response.');
            return { error: 'system-error' };
        }
        return { serviceRequest: response.data[fieldDef.deleteField] };
    }
    catch (error) {
        logger.error('delete: error', { error, headers: helpers.headers() });
        return null;
    }
};
export default deleteFnc;
//# sourceMappingURL=delete.js.map