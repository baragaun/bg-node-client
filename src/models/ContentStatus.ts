import { BaseModel } from './BaseModel.js';

export class ContentStatus extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public optionsUpdatedAt?: number | null;
  public myUserUpdatedAt?: number | null;
  public myUserInboxUpdatedAt?: number | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ContentStatus>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.optionsUpdatedAt) {
        this.optionsUpdatedAt = attributes.optionsUpdatedAt;
      }
      if (attributes.myUserUpdatedAt) {
        this.myUserUpdatedAt = attributes.myUserUpdatedAt;
      }
      if (attributes.myUserInboxUpdatedAt) {
        this.myUserInboxUpdatedAt = attributes.myUserInboxUpdatedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
