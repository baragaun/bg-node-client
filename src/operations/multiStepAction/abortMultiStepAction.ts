import libData from '../../helpers/libData.js';

const abortMultiStepAction = (actionId: string): boolean => {
  const run = libData.multiStepActionRun(actionId);

  if (!run) {
    return false;
  }

  run.abort();

  return true;
};

export default abortMultiStepAction;
