import { ChannelEventReason, ModelType, MyUserEventReason, UserEventReason } from '../enums.js';
import { BaseModel } from '../models/BaseModel.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
import { MyUser } from '../models/MyUser.js';
import { ServiceRequest } from '../models/ServiceRequest.js';
import { UserInbox } from '../models/UserInbox.js';
export interface BaseNatsPayload {
    serviceRequest?: ServiceRequest;
}
export interface NatsPayloadModelChanged<T extends BaseModel = BaseModel> extends BaseNatsPayload {
    objectId: string;
    modelType: ModelType;
    changeType: 'created' | 'updated' | 'deleted';
    object?: T;
}
export interface ChannelEventPayload extends BaseNatsPayload {
    reason: ChannelEventReason;
    channelId: string;
    channelInvitationId?: string;
    channelMessageId?: string;
    channelParticipantId?: string;
    data?: {
        channel?: Channel;
        channelInvitation?: ChannelInvitation;
        channelMessage?: ChannelMessage;
        channelParticipant?: ChannelParticipant;
    };
}
export interface MyUserEventPayload extends BaseNatsPayload {
    reason: MyUserEventReason;
    channelId?: string;
    otherUserId?: string;
    data?: {
        channel?: Channel;
        channelInvitation?: ChannelInvitation;
        myUser?: MyUser;
        userInbox?: UserInbox;
    };
}
export interface UserEventPayload extends BaseNatsPayload {
    reason: UserEventReason;
    channelId?: string;
    otherUserId?: string;
    data?: {
        channel?: Channel;
        channelInvitation?: ChannelInvitation;
        userInbox?: UserInbox;
    };
}
