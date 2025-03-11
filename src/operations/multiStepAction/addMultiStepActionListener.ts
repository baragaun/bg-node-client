import helpers from './helpers.js';
import { MultiStepActionListener } from '../../types/index.js';

const addMultiStepActionListener = (
  actionId: string,
  listener: MultiStepActionListener,
): boolean => {
  const run = helpers.run(actionId);

  if (!run) {
    return false;
  }

  return run.addListener(listener);
};

export default addMultiStepActionListener;
