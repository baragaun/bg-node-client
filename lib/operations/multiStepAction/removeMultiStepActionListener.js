import data from '../../helpers/data.js';
const removeMultiStepActionListener = (actionId, id) => {
    const run = data.multiStepActionRun(actionId);
    if (!run) {
        return false;
    }
    run.removeListener(id);
    return true;
};
export default removeMultiStepActionListener;
//# sourceMappingURL=removeMultiStepActionListener.js.map