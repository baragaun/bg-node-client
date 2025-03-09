import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
const findMyActiveMultiStepActions = async () => {
    const config = data.config();
    if (!config) {
        console.error('findMyActiveMultiStepActions: no config.');
        return null;
    }
    try {
        const actions = await fsdata.multiStepAction.findMyActiveMultiStepActions();
        return actions;
    }
    catch (error) {
        console.error('findMyActiveMultiStepActions: fsdata.myUser.findMyActiveMultiStepActions failed', error);
        return null;
    }
};
export default findMyActiveMultiStepActions;
//# sourceMappingURL=findMyActiveMultiStepActions.js.map