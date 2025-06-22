import { BaseModel } from './BaseModel.js';

export abstract class SidContactListFilter extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userIdIn?: string[];
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidContactListFilter>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userIdIn !== undefined) {
        this.userIdIn = attributes.userIdIn;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
