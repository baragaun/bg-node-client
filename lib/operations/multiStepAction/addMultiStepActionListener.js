import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
/**
 * Add a listener to a multi-step action.
 * @param actionId The ID of the multi-step action (required)
 * @param listener The listener to add (required)
 * @returns The ID of the listener
 */
const addMultiStepActionListener = (actionId, listener) => {
    if (!libData.isInitialized()) {
        logger.error('addMultiStepActionListener: unavailable');
        return null;
    }
    const run = libData.multiStepActionRun(actionId);
    if (!run) {
        return null;
    }
    return run.addListener(listener);
};
export default addMultiStepActionListener;
//# sourceMappingURL=addMultiStepActionListener.js.map