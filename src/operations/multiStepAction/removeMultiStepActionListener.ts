import data from '../../helpers/data.js';

const removeMultiStepActionListener = (
  actionId: string,
  id: string,
): boolean => {
  const run = data.multiStepActionRun(actionId);

  if (!run) {
    return false;
  }

  run.removeListener(id);

  return true;
};

export default removeMultiStepActionListener;
