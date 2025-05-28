import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
export interface FindChannelOptions {
    includeParticipants: boolean;
    includeMessages: boolean;
    participantLimit?: number;
    messageLimit?: number;
}
export interface FindChannelResult {
    channel?: Channel | null;
    messages?: ChannelMessage[];
    participants?: ChannelParticipant[];
    error?: string;
}
