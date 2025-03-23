/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
import { ChannelParticipantRole } from '../enums.js';

export class BgChannelParticipant extends BaseModel {
  public channelId = '';
  public userId = '';
  public invitedBy?: string | null;
  public channelName?: string | null;
  public role?: ChannelParticipantRole | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;

  constructor(attributes?: Partial<BgChannelParticipant>) {
    super(attributes);

    if (attributes) {
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
      }
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.invitedBy) {
        this.invitedBy = attributes.invitedBy;
      }
      if (attributes.channelName) {
        this.channelName = attributes.channelName;
      }
      if (attributes.role) {
        this.role = attributes.role;
      }
      if (attributes.suspendedAt) {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.suspendedBy) {
        this.suspendedBy = attributes.suspendedBy;
      }
    }
  }
}
