import { BaseModel } from './BaseModel.js';

export class ProductCategory extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public importId = '';
  public name = '';
  public labelEn = '';
  public sortIndex = 0;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ProductCategory>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.importId !== undefined) {
        this.importId = attributes.importId;
      }
      if (attributes.name !== undefined) {
        this.name = attributes.name;
      }
      if (attributes.labelEn !== undefined) {
        this.labelEn = attributes.labelEn;
      }
      if (
        attributes.sortIndex === null ||
        attributes.sortIndex === 0 ||
        (
          attributes.sortIndex &&
          !isNaN(attributes.sortIndex)
        )
      ) {
        this.sortIndex = attributes.sortIndex;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
