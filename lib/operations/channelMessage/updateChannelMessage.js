import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannelMessage = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.ChannelMessage, queryOptions);
    return result;
};
export default updateChannelMessage;
//# sourceMappingURL=updateChannelMessage.js.map