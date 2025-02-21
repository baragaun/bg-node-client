/**
 * Used by findChannel to filter messages.
 */
export interface ChannelFilter {
  /**
   * The ID of the channel to filter channels by.
   */
  id?: string;

  /**
   * The ID of the user to filter channels by.
   */
  userId?: string;

  /**
   * The ID of the channel to filter channels by.
   */
  name?: string;
}
