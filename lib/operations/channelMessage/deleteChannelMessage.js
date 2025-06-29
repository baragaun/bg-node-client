import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import deleteFnc from '../delete.js';
const deleteChannelMessage = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    return deleteFnc(id, ModelType.ChannelMessage, deletePhysically, queryOptions);
};
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map