import { ChannelEventType } from '../enums.js';
import { ChannelMessage } from '../models/ChannelMessage.js';

/**
 * Interface representing the payload of a channel event.
 */
export interface ChannelEventPayload {
  /**
   * The type of the event.
   */
  eventType: ChannelEventType;

  /**
   * The channel message associated with the event.
   * Will be `null` for `messageDeleted`, `messageDelivered`, `messageSeen`, `userStartedTyping`, `userStoppedTyping`, `reactionToMessageCreated`, `reactionToMessageDeleted`.
   */
  channelMessage?: ChannelMessage;

  /**
   * The ID of the channel message.
   */
  channelMessageId?: string;

  /**
   * The ID of the user that sent the message.
   */
  senderId?: string;

  /**
   * The ID of the user that received/seen/deleted the message, or added a reaction (emoji) to a message.
   */
  userId?: string;
}
