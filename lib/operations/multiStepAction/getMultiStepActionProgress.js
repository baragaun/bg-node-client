import { CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionResult, MultiStepActionType } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import findMyUser from '../myUser/findMyUser.js';
const getMultiStepActionProgress = async (actionId, confirmToken) => {
    const config = data.config();
    const result = {};
    if (!config) {
        console.error('getMultiStepActionProgress: no config.');
        result.error = 'unavailable';
        return result;
    }
    try {
        const action = await fsdata.multiStepAction.getMultiStepActionProgress(actionId, confirmToken);
        if (!action) {
            console.error('getMultiStepActionProgress: action not found.');
            return null;
        }
        if (action.actionType === MultiStepActionType.TokenSignIn &&
            action.result === MultiStepActionResult.Ok &&
            action.authToken &&
            action.userId) {
            // The user just signed in with a token.
            // Making the user info available to the rest of the client:
            const config = data.config();
            config.myUserId = action.userId;
            config.authToken = action.authToken;
            data.setConfig(config);
            // Save the data to LocalStorage:
            saveUserInfo({
                myUserId: action.userId,
                myUserIdSignedOut: null,
                authToken: action.authToken,
            });
            // Fetching a fresh copy of the user:
            await findMyUser({ cachePolicy: CachePolicy.network });
        }
        return { object: action };
    }
    catch (error) {
        console.error('findMultiStepAction: fsdata.myUser.getMultiStepActionProgress failed', error);
        return null;
    }
};
export default getMultiStepActionProgress;
//# sourceMappingURL=getMultiStepActionProgress.js.map