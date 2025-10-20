/**
 * Subscribes to NATS subjects for all channels the user is a member of.
 * The channels are loaded from the local database only.
 */
export declare const subscribeToMyChannelEvents: () => Promise<void>;
