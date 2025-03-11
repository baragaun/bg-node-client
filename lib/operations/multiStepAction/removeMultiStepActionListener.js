import helpers from './helpers.js';
const removeMultiStepActionListener = (actionId, id) => {
    const run = helpers.run(actionId);
    if (!run) {
        return false;
    }
    run.removeListener(id);
    return true;
};
export default removeMultiStepActionListener;
//# sourceMappingURL=removeMultiStepActionListener.js.map