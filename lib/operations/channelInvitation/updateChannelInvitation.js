import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateChannelInvitation = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.ChannelInvitation, queryOptions);
};
export default updateChannelInvitation;
//# sourceMappingURL=updateChannelInvitation.js.map