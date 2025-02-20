import { ChannelEventPayload } from './ChannelEventPayload';

/**
 * Type representing a callback function for channel events.
 * @param payload - The payload of the channel event.
 */
export type ChannelEventCallback = (payload: ChannelEventPayload) => void;
