import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannelParticipant = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.ChannelParticipant, queryOptions);
};
export default updateChannelParticipant;
//# sourceMappingURL=updateChannelParticipant.js.map