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
        if (response.error) {
            logger.error('fsdata.findMultiStepActionProgress: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        logger.debug('fsdata.getMultiStepActionProgress: response received.', { response: JSON.stringify(response) });
        return { object: response.data.getMultiStepActionProgress };
    }
    catch (error) {
        logger.error('fsdata.getMultiStepActionProgress: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default getMultiStepActionProgress;
//# sourceMappingURL=getMultiStepActionProgress.js.map