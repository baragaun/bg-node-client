import { BaseModel } from './BaseModel.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelType } from '../enums.js';

export class BgChannel extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public name?: string | null;
  public topic?: string | null;
  public description?: string | null;
  public tags?: string[] | null;
  public channelType: ChannelType = ChannelType.unset;
  public statuses?: BgChannelStatus[] | null;
  public userIds?: string[] | null;
  public otherUserId?: string | null;
  public maxSeq = 0;
  public lastLiveSeq = 0;
  declare public metadata?: ChannelMetadata | null;
  public syncedToAnalyticsAt?: string | null;
  public pausedAt?: string | null;
  public pausedBy?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  public lockedAt?: string | null;
  public lockedBy?: string | null;
  public archivedAt?: string | null;
  public archivedBy?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannel>) {
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
      if (
        attributes.maxSeq === null ||
        attributes.maxSeq === 0 ||
        (
          attributes.maxSeq &&
          !isNaN(attributes.maxSeq)
        )
      ) {
        this.maxSeq = attributes.maxSeq;
      }
      if (
        attributes.lastLiveSeq === null ||
        attributes.lastLiveSeq === 0 ||
        (
          attributes.lastLiveSeq &&
          !isNaN(attributes.lastLiveSeq)
        )
      ) {
        this.lastLiveSeq = attributes.lastLiveSeq;
      }
      if (attributes.metadata !== undefined) {
        this.metadata = attributes.metadata;
      }
      if (attributes.syncedToAnalyticsAt !== undefined && attributes.syncedToAnalyticsAt !== '') {
        this.syncedToAnalyticsAt = attributes.syncedToAnalyticsAt;
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

  static get searchFields(): string[] {
    return ['name', 'topic', 'description', 'tags'];
  }
}
