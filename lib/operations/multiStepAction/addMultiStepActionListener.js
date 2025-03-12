import data from '../../helpers/data.js';
const addMultiStepActionListener = (actionId, listener) => {
    const run = data.multiStepActionRun(actionId);
    if (!run) {
        return false;
    }
    return run.addListener(listener);
};
export default addMultiStepActionListener;
//# sourceMappingURL=addMultiStepActionListener.js.map