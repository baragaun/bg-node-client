import helpers from './helpers.js';
const addMultiStepActionListener = (actionId, listener) => {
    const run = helpers.run(actionId);
    if (!run) {
        return false;
    }
    return run.addListener(listener);
};
export default addMultiStepActionListener;
//# sourceMappingURL=addMultiStepActionListener.js.map