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