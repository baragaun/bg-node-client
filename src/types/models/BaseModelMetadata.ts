/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BaseModelMetadata {
  public updatedAt?: Date | null

  public constructor(attributes?: Partial<BaseModelMetadata>) {
    if (attributes) {
      if (attributes.updatedAt) {
        if (attributes.updatedAt instanceof Date) {
          this.updatedAt = attributes.updatedAt
        } else {
          this.updatedAt = new Date(attributes.updatedAt)
        }
      }
    }
  }
}
