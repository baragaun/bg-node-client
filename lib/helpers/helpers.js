import { ModelType } from '../types/enums.js';
import { Channel } from '../types/models/Channel.js';
import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { User } from '../types/models/User.js';
export const getModelTypeFromObject = (obj) => {
    if (obj instanceof Channel) {
        return ModelType.Channel;
    }
    if (obj instanceof ChannelInvitation) {
        return ModelType.ChannelInvitation;
    }
    if (obj instanceof ChannelMessage) {
        return ModelType.ChannelMessage;
    }
    if (obj instanceof ChannelParticipant) {
        return ModelType.ChannelParticipant;
    }
    if (obj instanceof User) {
        return ModelType.User;
    }
    return null;
};
//# sourceMappingURL=helpers.js.map