import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { SidMultiStepAction } from '../../types/models/SidMultiStepAction.js';

const findMyActiveMultiStepActions = async (): Promise<
  SidMultiStepAction[]
> => {
  const config = data.config();

  if (!config) {
    console.error('findMyActiveMultiStepActions: no config.');
    return null;
  }
  try {
    const actions = await fsdata.multiStepAction.findMyActiveMultiStepActions();

    return actions;
  } catch (error) {
    console.error(
      'findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed',
      error,
    );
    return null;
  }
};

export default findMyActiveMultiStepActions;
