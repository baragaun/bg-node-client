import { MultiStepActionListener } from '../../types/index.js';
/**
 * Add a listener to a multi-step action.
 * @param actionId The ID of the multi-step action (required)
 * @param listener The listener to add (required)
 * @returns The ID of the listener
 */
declare const addMultiStepActionListener: (actionId: string, listener: MultiStepActionListener) => string | null;
export default addMultiStepActionListener;
