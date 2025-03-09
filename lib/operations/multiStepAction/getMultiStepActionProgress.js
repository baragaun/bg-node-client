import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
const getMultiStepActionProgress = async (actionId, confirmToken) => {
    const config = data.config();
    if (!config) {
        console.error('getMultiStepActionProgress: no config.');
        return null;
    }
    try {
        const action = await fsdata.multiStepAction.getMultiStepActionProgress(actionId, confirmToken);
        return action;
    }
    catch (error) {
        console.error('findMultiStepAction: fsdata.myUser.getMultiStepActionProgress failed', error);
        return null;
    }
};
export default getMultiStepActionProgress;
//# sourceMappingURL=getMultiStepActionProgress.js.map