import { ModelType } from '../../enums.js';
import formatChannelForDb from './formatChannelForDb.js';
import formatChannelInvitationForDb from './formatChannelInvitationForDb.js';
import formatChannelMessageForDb from './formatChannelMessageForDb.js';
import formatChannelParticipantForDb from './formatChannelParticipantForDb.js';
import formatUserForDb from './formatUserForDb.js';
import formatUserInboxForDb from './formatUserInboxForDb.js';
const formatObjectForDb = (obj, modelType) => {
    switch (modelType) {
        case ModelType.Channel:
            return formatChannelForDb(obj);
        case ModelType.ChannelInvitation:
            return formatChannelInvitationForDb(obj);
        case ModelType.ChannelMessage:
            return formatChannelMessageForDb(obj);
        case ModelType.ChannelParticipant:
            return formatChannelParticipantForDb(obj);
        case ModelType.User:
            return formatUserForDb(obj);
        case ModelType.UserInbox:
            return formatUserInboxForDb(obj);
        default:
            throw new Error(`Unknown model type: ${modelType}`);
    }
};
const modelHelpers = {
    formatObjectForDb,
};
export default modelHelpers;
//# sourceMappingURL=modelHelpers.js.map