import libData from '../../helpers/libData.js';
import { MultiStepActionListener } from '../../types/index.js';

/**
 * Add a listener to a multi-step action.
 * @param actionId The ID of the multi-step action (required)
 * @param listener The listener to add (required)
 * @returns The ID of the listener
 */
const addMultiStepActionListener = (
  actionId: string,
  listener: MultiStepActionListener,
): string | null => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const run = libData.multiStepActionRun(actionId);

  if (!run) {
    return null;
  }

  return run.addListener(listener);
};

export default addMultiStepActionListener;
