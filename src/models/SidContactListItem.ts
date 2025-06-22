import { BaseModel } from './BaseModel.js';

export abstract class SidContactListItem extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public channelId?: string | null;
  public nickname?: string | null;
  public typeTextIds: string[] = [];
  public favorite?: boolean | null;
  public notes?: string | null;
  public archivedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidContactListItem>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
      }
      if (attributes.channelId !== undefined) {
        this.channelId = attributes.channelId;
      }
      if (attributes.nickname !== undefined) {
        this.nickname = attributes.nickname;
      }
      if (attributes.typeTextIds !== undefined) {
        this.typeTextIds = attributes.typeTextIds;
      }
      if (attributes.favorite !== undefined) {
        this.favorite = attributes.favorite;
      }
      if (attributes.notes !== undefined) {
        this.notes = attributes.notes;
      }
      if (attributes.archivedAt !== undefined && attributes.archivedAt !== '') {
        this.archivedAt = attributes.archivedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
