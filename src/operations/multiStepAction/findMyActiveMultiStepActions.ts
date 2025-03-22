import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { SidMultiStepAction } from '../../types/models/SidMultiStepAction.js';

const findMyActiveMultiStepActions = async (): Promise<
  SidMultiStepAction[]
> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const config = libData.config();

  if (!config) {
    logger.error('findMyActiveMultiStepActions: no config.');
    return null;
  }
  try {
    const actions = await fsdata.multiStepAction.findMyActiveMultiStepActions();

    return actions;
  } catch (error) {
    logger.error(
      'findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed',
      error,
    );
    return null;
  }
};

export default findMyActiveMultiStepActions;
