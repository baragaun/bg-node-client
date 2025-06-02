import { Channel } from '../models/Channel.js';
export class ChannelListItem extends Channel {
    participants;
    latestMessage;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.participants) {
                this.participants = attributes.participants;
            }
            if (attributes.latestMessage) {
                this.latestMessage = attributes.latestMessage;
            }
        }
    }
}
//# sourceMappingURL=ChannelListItem.js.map