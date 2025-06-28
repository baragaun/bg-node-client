import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import deleteFnc from '../delete.js';
const deleteChannelParticipant = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    return deleteFnc(id, ModelType.ChannelParticipant, deletePhysically, queryOptions);
};
export default deleteChannelParticipant;
//# sourceMappingURL=deleteChannelParticipant.js.map