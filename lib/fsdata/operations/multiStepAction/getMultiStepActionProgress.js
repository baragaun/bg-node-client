import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const getMultiStepActionProgress = async (actionId, confirmToken) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.getMultiStepActionProgress: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { actionId, confirmToken };
        logger.debug('fsdata.getMultiStepActionProgress: sending.', { args });
        const response = await client.query.getMultiStepActionProgress({
            $: args,
            ...modelFields.sidMultiStepActionProgress,
        });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findMultiStepActionProgress: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.getMultiStepActionProgress: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.getMultiStepActionProgress: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        return { object: response.data.getMultiStepActionProgress };
    }
    catch (error) {
        logger.error('fsdata.getMultiStepActionProgress: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default getMultiStepActionProgress;
//# sourceMappingURL=getMultiStepActionProgress.js.map