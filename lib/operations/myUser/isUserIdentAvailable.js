import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
const isUserIdentAvailable = async (userIdent, identType) => {
    const config = data.config();
    if (!config) {
        console.error('isUserIdentAvailable: no config.');
        return null;
    }
    try {
        return fsdata.myUser.isUserIdentAvailable(userIdent, identType);
    }
    catch (error) {
        console.error('isUserIdentAvailable: fsdata.myUser.isUserIdentAvailable failed', error);
        return null;
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map