import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import deleteFnc from '../delete.js';
const deleteChannelInvitation = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    return deleteFnc(id, ModelType.ChannelInvitation, deletePhysically, queryOptions);
};
export default deleteChannelInvitation;
//# sourceMappingURL=deleteChannelInvitation.js.map