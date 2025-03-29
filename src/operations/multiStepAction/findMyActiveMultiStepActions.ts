import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { SidMultiStepAction } from '../../models/SidMultiStepAction.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyActiveMultiStepActions = async (): Promise<
  QueryResult<SidMultiStepAction>
> => {
  if (!libData.isInitialized()) {
    logger.error('findMyActiveMultiStepActions: unavailable');
    return { error: 'unavailable' };
  }

  try {
    return fsdata.multiStepAction.findMyActiveMultiStepActions();
  } catch (error) {
    logger.error('findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed',
      { error } );
    return { error: (error as Error).message };
  }
};

export default findMyActiveMultiStepActions;
