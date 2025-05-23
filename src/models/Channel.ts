import { BgChannel } from './BgChannel.js';
import { ChannelMessage } from './ChannelMessage.js';

export class Channel extends BgChannel {
  constructor(attributes?: Partial<Channel>) {
    super(attributes);
  }
}

export class ChannelWithMessages extends Channel {
  public messages?: ChannelMessage[] | null;

  constructor(attributes?: Partial<ChannelWithMessages>) {
    super(attributes);
  }
}
