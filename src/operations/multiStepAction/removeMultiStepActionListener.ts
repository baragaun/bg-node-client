import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const removeMultiStepActionListener = (
  actionId: string,
  id: string,
): boolean => {
  if (!libData.isInitialized()) {
    logger.error('removeMultiStepActionListener: unavailable');
    return false;
  }

  const run = libData.multiStepActionRun(actionId);

  if (!run) {
    return false;
  }

  run.removeListener(id);

  return true;
};

export default removeMultiStepActionListener;
