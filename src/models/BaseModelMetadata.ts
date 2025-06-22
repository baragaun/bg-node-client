/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BaseModelMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public updatedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  public constructor(attributes?: Partial<BaseModelMetadata>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
