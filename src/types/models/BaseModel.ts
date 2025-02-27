/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js'
import { IBaseModel } from './IBaseModel.js'

export abstract class BaseModel implements IBaseModel {
  public id = '';
  public adminNotes?: string | null;
  public metadata?: BaseModelMetadata | null;
  public createdAt: string = new Date().toISOString();
  public createdBy?: string | null;
  public updatedAt?: string | null;
  public updatedBy?: string | null;
  public deletedAt?: string | null;
  public deletedBy?: string | null;

  protected constructor(attributes?: Partial<BaseModel> | null) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id
      }
      if (attributes.adminNotes) {
        this.adminNotes = attributes.adminNotes
      }
      if (attributes.metadata) {
        this.metadata = attributes.metadata
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt
      }
      if (attributes.createdBy) {
        this.createdBy = attributes.createdBy
      }
      if (attributes.updatedAt) {
        this.updatedAt = attributes.updatedAt
      }
      if (attributes.updatedBy) {
        this.updatedBy = attributes.updatedBy
      }
      if (attributes.deletedAt) {
        this.deletedAt = attributes.deletedAt
      }
      if (attributes.deletedBy) {
        this.deletedBy = attributes.deletedBy
      }
    }
  }
}
