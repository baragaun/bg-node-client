/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BaseModelMetadata {
  public updatedAt?: string | null;

  public constructor(attributes?: Partial<BaseModelMetadata>) {
    if (attributes) {
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt;
      }
    }
  }
}
