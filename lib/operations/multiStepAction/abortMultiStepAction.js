import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
// todo: return QueryResult, also cancel MultiStepAction
const abortMultiStepAction = (actionId) => {
    if (!libData.isInitialized()) {
        logger.error('abortMultiStepAction: unavailable');
        return false;
    }
    const run = libData.multiStepActionRun(actionId);
    if (!run) {
        logger.warn('abortMultiStepAction: MultiStepActionRun not found, cannot abort', { actionId });
        return false;
    }
    run.abort();
    return true;
};
export default abortMultiStepAction;
//# sourceMappingURL=abortMultiStepAction.js.map