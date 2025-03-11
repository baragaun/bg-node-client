import helpers from './helpers.js';

const removeMultiStepActionListener = (actionId: string, id: string): boolean => {
  const run = helpers.run(actionId);

  if (!run) {
    return false;
  }

  run.removeListener(id);

  return true;
};

export default removeMultiStepActionListener;
