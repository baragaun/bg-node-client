import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const abortMultiStepAction = (actionId: string): boolean => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const run = libData.multiStepActionRun(actionId);

  if (!run) {
    logger.warn('abortMultiStepAction: MultiStepActionRun not found, cannot abort',
      { actionId });
    return false;
  }

  run.abort();

  return true;
};

export default abortMultiStepAction;
