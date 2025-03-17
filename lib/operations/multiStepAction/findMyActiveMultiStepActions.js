import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyActiveMultiStepActions = async () => {
    const config = libData.config();
    if (!config) {
        logger.error('findMyActiveMultiStepActions: no config.');
        return null;
    }
    try {
        const actions = await fsdata.multiStepAction.findMyActiveMultiStepActions();
        return actions;
    }
    catch (error) {
        logger.error('findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed', error);
        return null;
    }
};
export default findMyActiveMultiStepActions;
//# sourceMappingURL=findMyActiveMultiStepActions.js.map