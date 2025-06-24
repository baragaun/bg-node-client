import { BgChannel } from './BgChannel.js';
import { ChannelMessage } from './ChannelMessage.js';

export class Channel extends BgChannel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<Channel>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['name'];
  }
}

export class ChannelWithMessages extends Channel {
  public messages?: ChannelMessage[] | null;

  constructor(attributes?: Partial<ChannelWithMessages>) {
    super(attributes);
  }
}
