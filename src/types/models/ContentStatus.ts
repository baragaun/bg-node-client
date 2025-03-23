import { BaseModel } from './BaseModel.js'

export class ContentStatus extends BaseModel {
  public optionsUpdatedAt?: number | null
  public myUserUpdatedAt?: number | null
  public myUserInboxUpdatedAt?: number | null

  constructor(attributes?: Partial<ContentStatus>) {
    super(attributes)

    if (attributes) {
      if (attributes.optionsUpdatedAt) {
        this.optionsUpdatedAt = attributes.optionsUpdatedAt
      }
      if (attributes.myUserUpdatedAt) {
        this.myUserUpdatedAt = attributes.myUserUpdatedAt
      }
      if (attributes.myUserInboxUpdatedAt) {
        this.myUserInboxUpdatedAt = attributes.myUserInboxUpdatedAt
      }
    }
  }
}
