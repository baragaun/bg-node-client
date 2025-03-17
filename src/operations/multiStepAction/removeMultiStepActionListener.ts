import libData from '../../helpers/libData.js';

const removeMultiStepActionListener = (
  actionId: string,
  id: string,
): boolean => {
  const run = libData.multiStepActionRun(actionId);

  if (!run) {
    return false;
  }

  run.removeListener(id);

  return true;
};

export default removeMultiStepActionListener;
