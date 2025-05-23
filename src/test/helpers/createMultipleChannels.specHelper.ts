import { createChannelSpecHelper } from './createChannel.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { Channel, ChannelWithMessages } from '../../models/Channel.js';

export const createMultipleChannelSpecHelper = async (
  specs: { props: Partial<Channel>, messageCount?: number }[],
  client: BgNodeClient,
): Promise<ChannelWithMessages[]> => {

    return Promise.all(
      specs.map((spec) => createChannelSpecHelper(spec.props, spec.messageCount, client)),
    );
};

