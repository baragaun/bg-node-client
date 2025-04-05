import { ModelType } from '../../enums.js';
import deleteFnc from '../delete.js';
const deleteChannel = async (id) => {
    return deleteFnc(id, ModelType.Channel);
};
export default deleteChannel;
//# sourceMappingURL=deleteChannel.js.map