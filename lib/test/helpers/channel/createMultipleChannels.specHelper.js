import { createChannelSpecHelper } from './createChannel.specHelper.js';
export const createMultipleChannelSpecHelper = async (specs, client) => {
    return Promise.all(specs.map((spec) => createChannelSpecHelper(spec.props, spec.messageCount, client)));
};
//# sourceMappingURL=createMultipleChannels.specHelper.js.map