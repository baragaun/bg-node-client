import { BgChannel } from './BgChannel.js';
export class Channel extends BgChannel {
    constructor(attributes) {
        super(attributes);
    }
}
export class ChannelWithMessages extends Channel {
    messages;
    constructor(attributes) {
        super(attributes);
    }
}
//# sourceMappingURL=Channel.js.map