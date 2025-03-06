import db from '../../db/db.js';
import findMyUserQuery from '../../fsdata/queries/findMyUser.js';
import data from '../../helpers/data.js';
import { ModelType } from '../../types/index.js';
import { MyUser } from '../../types/models/MyUser.js';
const findMyUser = async (queryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('findMyUser: no config.');
        return null;
    }
    try {
        if (queryOptions.useCache) {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            return queryResult.object;
        }
        const myUser = await findMyUserQuery();
        if (myUser) {
            // Update local cache:
            await db.replace(myUser);
        }
        return new MyUser(myUser);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map