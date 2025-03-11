import { MultiStepActionRun } from '../../types/models/MultiStepActionRun.js';
declare const multiStepActionHelpers: {
    runs: () => Map<string, MultiStepActionRun>;
    addRun: (run: MultiStepActionRun) => void;
    removeRun: (actionId: string) => void;
    run: (actionId: string) => MultiStepActionRun;
};
export default multiStepActionHelpers;
