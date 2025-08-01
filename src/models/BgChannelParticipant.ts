import { BaseModel } from './BaseModel.js';
import { BgChannelParticipantUserInfo } from './BgChannelParticipantUserInfo.js';
import { ChannelParticipantRole } from '../enums.js';

export class BgChannelParticipant extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public channelId = '';
  public userId = '';
  public userInfo?: BgChannelParticipantUserInfo | null;
  public invitedBy?: string | null;
  public channelName?: string | null;
  public role?: ChannelParticipantRole | null;
  public suspendedAt?: Date | null;
  public suspendedBy?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelParticipant>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.channelId) {
        this.channelId = attributes.channelId;
      }
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.userInfo) {
        this.userInfo = new BgChannelParticipantUserInfo(attributes.userInfo);
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
        if (attributes.suspendedAt instanceof Date) {
          this.suspendedAt = attributes.suspendedAt;
        } else {
          this.suspendedAt = new Date(attributes.suspendedAt);
        }
      }
      if (attributes.suspendedBy) {
        this.suspendedBy = attributes.suspendedBy;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
