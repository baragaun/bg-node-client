import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';

export class ChannelListItem extends Channel{
  public participants?: ChannelParticipant[];
  public latestMessage?: ChannelMessage;

  constructor(attributes?: Partial<ChannelListItem>) {
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
