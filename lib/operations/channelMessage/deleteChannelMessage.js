import { ModelType } from '../../enums.js';
import deleteFnc from '../delete.js';
const deleteChannelMessage = async (id) => {
    return deleteFnc(id, ModelType.ChannelMessage);
};
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map