import { ModelType } from '../../enums.js';
import deleteFnc from '../delete.js';
const deleteChannelParticipant = async (id) => {
    return deleteFnc(id, ModelType.ChannelParticipant);
};
export default deleteChannelParticipant;
//# sourceMappingURL=deleteChannelParticipant.js.map