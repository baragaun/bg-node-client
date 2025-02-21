/**
 * Used by findChannel to filter messages.
 */
export interface ChannelFilter {
  /**
   * The ID of the channel to filter channels by.
   */
  id?: string;
  userId?: string;
}
