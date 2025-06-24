import { BaseModel } from './BaseModel.js';

export class SidMultiStepActionListFilter extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId?: string | null;
  public isActive?: boolean | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
  // public events?: ModelEvent[] | null

  constructor(attributes?: Partial<SidMultiStepActionListFilter>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
      }
      if (attributes.isActive !== undefined) {
        this.isActive = attributes.isActive;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
