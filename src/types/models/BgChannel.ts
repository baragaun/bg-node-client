import { ChannelType } from '../enums.js';
import { BaseModel } from './BaseModel.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelParticipant } from './ChannelParticipant.js';

export class BgChannel extends BaseModel {
  public name?: string | null;
  public topic?: string | null;
  public description?: string | null;
  public tags?: string[] | null;
  public channelType: ChannelType = ChannelType.unset;
  public statuses?: BgChannelStatus[] | null;
  public userIds?: string[] | null;
  declare public metadata?: ChannelMetadata | null;
  public pausedAt?: string | null;
  public pausedBy?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  public lockedAt?: string | null;
  public lockedBy?: string | null;
  public archivedAt?: string | null;
  public archivedBy?: string | null;
  public participants?: ChannelParticipant[];

  constructor(attributes?: Partial<BgChannel>) {
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
