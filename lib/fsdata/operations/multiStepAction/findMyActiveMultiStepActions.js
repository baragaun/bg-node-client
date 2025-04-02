import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyActiveMultiStepActions = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyActiveMultiStepActions: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.query.findMyActiveMultiStepActions(modelFields.sidMultiStepAction);
        logger.debug('fsdata.findMyActiveMultiStepActions: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.findMyActiveMultiStepActions: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.findMyActiveMultiStepActions) {
            logger.error('fsdata.findMyActiveMultiStepActions: not found.');
            return { error: 'not-found' };
        }
        return { objects: response.data.findMyActiveMultiStepActions };
    }
    catch (error) {
        logger.error('fsdata.findMyActiveMultiStepActions: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findMyActiveMultiStepActions;
//# sourceMappingURL=findMyActiveMultiStepActions.js.map