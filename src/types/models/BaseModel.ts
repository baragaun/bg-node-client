/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js'
import { IBaseModel } from './IBaseModel.js'

export abstract class BaseModel implements IBaseModel {
  public id = ''
  public adminNotes?: string | null
  public metadata?: BaseModelMetadata | null
  public createdAt: Date = new Date()
  public createdBy?: string | null
  public updatedAt?: Date | null
  public updatedBy?: string | null
  public deletedAt?: Date | null
  public deletedBy?: string | null

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
        if (attributes.createdAt instanceof Date) {
          this.createdAt = attributes.createdAt
        } else {
          this.createdAt = new Date(attributes.createdAt)
        }
      }
      if (attributes.createdBy) {
        this.createdBy = attributes.createdBy
      }
      if (attributes.updatedAt) {
        if (attributes.updatedAt instanceof Date) {
          this.updatedAt = attributes.updatedAt
        } else {
          this.updatedAt = new Date(attributes.updatedAt)
        }
      }
      if (attributes.updatedBy) {
        this.updatedBy = attributes.updatedBy
      }
      if (attributes.deletedAt) {
        if (attributes.deletedAt instanceof Date) {
          this.deletedAt = attributes.deletedAt
        } else {
          this.deletedAt = new Date(attributes.deletedAt)
        }
      }
      if (attributes.deletedBy) {
        this.deletedBy = attributes.deletedBy
      }
    }
  }
}
