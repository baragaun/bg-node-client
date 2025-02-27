/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { BaseModelMetadata } from './BaseModelMetadata.js'

export interface IBaseModel {
  id: string
  adminNotes?: string | null
  metadata?: BaseModelMetadata | null
  createdAt: Date
  createdBy?: string | null
  updatedAt?: Date | null
  updatedBy?: string | null
  deletedAt?: Date | null
  deletedBy?: string | null
}
