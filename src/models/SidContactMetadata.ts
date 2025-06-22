/** Copyright ©2024 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';

export abstract class SidContactMetadata extends BaseModelMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public firstName?: string | null;
  public lastName?: string | null;
  public userHandle?: string | null;
  public avatarUrl?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidContactMetadata>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.firstName !== undefined) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName !== undefined) {
        this.lastName = attributes.lastName;
      }
      if (attributes.userHandle !== undefined) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.avatarUrl !== undefined) {
        this.avatarUrl = attributes.avatarUrl;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
