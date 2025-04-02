import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateMyUser = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.MyUser, queryOptions);
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map