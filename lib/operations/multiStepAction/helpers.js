const _runs = new Map();
const multiStepActionHelpers = {
    runs: () => _runs,
    addRun: (run) => {
        _runs.set(run.actionId, run);
    },
    removeRun: (actionId) => {
        _runs.delete(actionId);
    },
    run: (actionId) => _runs.get(actionId),
};
export default multiStepActionHelpers;
//# sourceMappingURL=helpers.js.map