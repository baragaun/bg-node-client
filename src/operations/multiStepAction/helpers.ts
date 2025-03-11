import { MultiStepActionRun } from '../../types/models/MultiStepActionRun.js';

const _runs = new Map<string, MultiStepActionRun>();

const multiStepActionHelpers = {
  runs: () => _runs,

  addRun: (run: MultiStepActionRun) => {
    _runs.set(run.actionId, run);
  },

  removeRun: (actionId: string) => {
    _runs.delete(actionId);
  },

  run: (actionId: string) => _runs.get(actionId),
};

export default multiStepActionHelpers;
