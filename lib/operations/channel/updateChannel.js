import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannel = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.Channel, queryOptions);
    return result;
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map