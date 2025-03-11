import { MultiStepActionRun } from '../../types/models/MultiStepActionRun.js';

const _runs = new Map<string, MultiStepActionRun>();

const multiStepActionHelpers = {
  runs: (): Map<string, MultiStepActionRun> => _runs,

  addRun: (run: MultiStepActionRun): void => {
    _runs.set(run.actionId, run);
  },

  removeRun: (actionId: string): void => {
    _runs.delete(actionId);
  },

  run: (actionId: string): MultiStepActionRun | null => _runs.get(actionId),
};

export default multiStepActionHelpers;
