/**
 * Used by findChannelMessages to filter messages.
 */
export interface ChannelMessageFilter {
    id?: string;
    /**
     * The ID of the channel to filter messages by.
     */
    channelId?: string;
}
