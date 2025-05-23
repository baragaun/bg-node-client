/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export abstract class Model {
  public id = '';
  public createdAt: string = new Date().toISOString();
  public createdBy?: string | null;
  public updatedAt?: string | null;
  public updatedBy?: string | null;
  public deletedAt?: string | null;
  public deletedBy?: string | null;

  protected constructor(attributes?: Partial<Model> | null) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id;
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt;
      }
      if (attributes.createdBy) {
        this.createdBy = attributes.createdBy;
      }
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt;
      }
      if (attributes.updatedBy) {
        this.updatedBy = attributes.updatedBy;
      }
      if (attributes.deletedAt) {
        this.deletedAt = attributes.deletedAt;
      }
      if (attributes.deletedBy) {
        this.deletedBy = attributes.deletedBy;
      }
    }
  }

  static get searchFields(): string[] {
    return [];
  }
}
