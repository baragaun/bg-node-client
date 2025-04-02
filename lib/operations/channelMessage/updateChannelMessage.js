import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannelMessage = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.ChannelMessage, queryOptions);
};
export default updateChannelMessage;
//# sourceMappingURL=updateChannelMessage.js.map