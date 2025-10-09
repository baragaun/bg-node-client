import { BaseModel } from './BaseModel.js';
import { ChannelType } from '../enums.js';
export class BgChannel extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
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
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.name !== undefined) {
                this.name = attributes.name;
            }
            if (attributes.topic !== undefined) {
                this.topic = attributes.topic;
            }
            if (attributes.description !== undefined) {
                this.description = attributes.description;
            }
            if (attributes.tags !== undefined) {
                this.tags = attributes.tags;
            }
            if (attributes.channelType !== undefined) {
                this.channelType = attributes.channelType;
            }
            if (attributes.statuses !== undefined) {
                this.statuses = attributes.statuses;
            }
            if (attributes.userIds !== undefined) {
                this.userIds = attributes.userIds;
            }
            if (attributes.otherUserId !== undefined) {
                this.otherUserId = attributes.otherUserId;
            }
            if (attributes.metadata !== undefined) {
                this.metadata = attributes.metadata;
            }
            if (attributes.pausedAt !== undefined && attributes.pausedAt !== '') {
                this.pausedAt = attributes.pausedAt;
            }
            if (attributes.pausedBy !== undefined) {
                this.pausedBy = attributes.pausedBy;
            }
            if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy !== undefined) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.lockedAt !== undefined && attributes.lockedAt !== '') {
                this.lockedAt = attributes.lockedAt;
            }
            if (attributes.lockedBy !== undefined) {
                this.lockedBy = attributes.lockedBy;
            }
            if (attributes.archivedAt !== undefined && attributes.archivedAt !== '') {
                this.archivedAt = attributes.archivedAt;
            }
            if (attributes.archivedBy !== undefined) {
                this.archivedBy = attributes.archivedBy;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['name', 'topic', 'description', 'tags'];
    }
}
//# sourceMappingURL=BgChannel.js.map