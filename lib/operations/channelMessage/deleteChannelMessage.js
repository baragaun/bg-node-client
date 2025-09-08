import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import deleteFnc from '../delete.js';
const deleteChannelMessage = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await deleteFnc(id, ModelType.ChannelMessage, deletePhysically, queryOptions);
    if (result.object) {
        // Notify via NATS
    }
    return result;
};
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map