import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyActiveMultiStepActions = async () => {
    if (!libData.isInitialized()) {
        logger.error('findMyActiveMultiStepActions: unavailable');
        return { error: 'unavailable' };
    }
    try {
        return fsdata.multiStepAction.findMyActiveMultiStepActions();
    }
    catch (error) {
        logger.error('findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed', { error });
        return { error: error.message };
    }
};
export default findMyActiveMultiStepActions;
//# sourceMappingURL=findMyActiveMultiStepActions.js.map