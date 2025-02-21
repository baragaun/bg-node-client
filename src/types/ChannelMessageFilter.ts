/**
 * Used by findChannelMessages to filter messages.
 */
export interface ChannelMessageFilter {
  /**
   * The ID of the channel to filter messages by.
   */
  channelId?: string;
}
