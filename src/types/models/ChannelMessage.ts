import { BgChannelMessage } from './BgChannelMessage.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';

export class ChannelMessage extends BgChannelMessage {
  declare public metadata?: ChannelMessageMetadata | null

  constructor(attributes?: Partial<ChannelMessage>) {
    super(attributes)
  }
}
