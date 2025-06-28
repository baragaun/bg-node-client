import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import deleteFnc from '../delete.js';
const deleteChannel = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    return deleteFnc(id, ModelType.Channel, deletePhysically, queryOptions);
};
export default deleteChannel;
//# sourceMappingURL=deleteChannel.js.map