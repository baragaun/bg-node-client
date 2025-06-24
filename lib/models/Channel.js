import { BgChannel } from './BgChannel.js';
export class Channel extends BgChannel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['name'];
    }
}
export class ChannelWithMessages extends Channel {
    messages;
    constructor(attributes) {
        super(attributes);
    }
}
//# sourceMappingURL=Channel.js.map