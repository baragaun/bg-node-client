import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import logger from '../../helpers/logger.js';
import { SidMultiStepAction } from '../../types/models/SidMultiStepAction.js';

const findMyActiveMultiStepActions = async (): Promise<
  SidMultiStepAction[]
> => {
  const config = data.config();

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
