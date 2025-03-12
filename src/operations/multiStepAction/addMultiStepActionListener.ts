import data from '../../helpers/data.js';
import { MultiStepActionListener } from '../../types/index.js';

const addMultiStepActionListener = (
  actionId: string,
  listener: MultiStepActionListener,
): boolean => {
  const run = data.multiStepActionRun(actionId);

  if (!run) {
    return false;
  }

  return run.addListener(listener);
};

export default addMultiStepActionListener;
