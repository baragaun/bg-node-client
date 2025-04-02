import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannel = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.Channel, queryOptions);
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map