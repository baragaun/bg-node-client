import { ModelType } from '../../enums.js';
import deleteFnc from '../delete.js';
const deleteChannelInvitation = async (id) => {
    return deleteFnc(id, ModelType.ChannelInvitation);
};
export default deleteChannelInvitation;
//# sourceMappingURL=deleteChannelInvitation.js.map