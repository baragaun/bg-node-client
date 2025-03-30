import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createMultiStepAction = async (input) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createMultiStepAction: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { input };
        logger.debug('fsdata.createMultiStepAction: sending:', { args });
        const response = await client.mutation.createMultiStepAction({
            $: args,
            ...modelFields.sidMultiStepActionProgress,
        });
        logger.debug('fsdata.createMultiStepAction: received response:', { response });
        return { object: response.data.createMultiStepAction };
    }
    catch (error) {
        logger.error('fsdata.createMultiStepAction: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createMultiStepAction;
//# sourceMappingURL=createMultiStepAction.js.map