import { BaseModel } from './BaseModel.js';
import { ChannelType } from '../enums.js';
export class BgChannel extends BaseModel {
    name;
    topic;
    description;
    tags;
    channelType = ChannelType.unset;
    statuses;
    userIds;
    otherUserId;
    pausedAt;
    pausedBy;
    suspendedAt;
    suspendedBy;
    lockedAt;
    lockedBy;
    archivedAt;
    archivedBy;
    participants;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.name) {
                this.name = attributes.name;
            }
            if (attributes.topic) {
                this.topic = attributes.topic;
            }
            if (attributes.description) {
                this.description = attributes.description;
            }
            if (attributes.tags) {
                this.tags = attributes.tags;
            }
            if (attributes.channelType) {
                this.channelType = attributes.channelType;
            }
            if (attributes.statuses) {
                this.statuses = attributes.statuses;
            }
            if (attributes.userIds) {
                this.userIds = attributes.userIds;
            }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.pausedAt) {
                this.pausedAt = attributes.pausedAt;
            }
            if (attributes.pausedBy) {
                this.pausedBy = attributes.pausedBy;
            }
            if (attributes.suspendedAt) {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.lockedAt) {
                this.lockedAt = attributes.lockedAt;
            }
            if (attributes.lockedBy) {
                this.lockedBy = attributes.lockedBy;
            }
            if (attributes.archivedAt) {
                this.archivedAt = attributes.archivedAt;
            }
            if (attributes.archivedBy) {
                this.archivedBy = attributes.archivedBy;
            }
        }
    }
}
//# sourceMappingURL=BgChannel.js.map