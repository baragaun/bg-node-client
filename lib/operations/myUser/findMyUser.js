import findMyUserQuery from '../../fsdata/queries/findMyUser.js';
import db from '../../db/db.js';
import data from '../../helpers/data.js';
import { ModelType } from '../../types/index.js';
const findMyUser = async (queryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('findMyUser: no config.');
        return null;
    }
    try {
        if (queryOptions.useCached) {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            return queryResult.object;
        }
        return findMyUserQuery();
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map