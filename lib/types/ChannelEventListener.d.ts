import { ChannelEventCallback } from './ChannelEventCallback';
/**
 * Interface representing a listener for channel events.
 */
export interface ChannelEventListener {
    /**
     * The ID of the channel.
     * We can ignore this for now.
     */
    channelId: string;
    /**
     * The ID of the user.
     */
    userId: string;
    /**
     * The UUID of the user's device.
     */
    deviceUuid: string;
    /**
     * The callback function to be invoked when a channel event occurs.
     */
    callback: ChannelEventCallback;
}
