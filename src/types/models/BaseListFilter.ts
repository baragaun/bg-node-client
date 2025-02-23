export abstract class BaseListFilter {
  public ids?: string[]
  public excludeIds?: string[]
  public searchText?: string
  public caseSensitive?: boolean
  public textSearchFields?: string[]
  public createdAtFrom?: Date | string | null
  public createdAtUntil?: Date | string | null
  public updatedAtFrom?: Date | string | null
  public updatedAtUntil?: Date | string | null

  protected constructor(attributes?: Partial<BaseListFilter> | null) {
    if (attributes) {
      if (attributes.ids) {
        this.ids = attributes.ids
      }
      if (attributes.excludeIds) {
        this.excludeIds = attributes.excludeIds
      }
      if (attributes.searchText) {
        this.searchText = attributes.searchText
      }
      if (attributes.caseSensitive === true || attributes.caseSensitive === false) {
        this.caseSensitive = attributes.caseSensitive
      }
      if (attributes.textSearchFields) {
        this.textSearchFields = attributes.textSearchFields
      }
      if (attributes.createdAtFrom) {
        if (attributes.createdAtFrom instanceof Date) {
          this.createdAtFrom = attributes.createdAtFrom
        } else {
          this.createdAtFrom = new Date(attributes.createdAtFrom)
        }
      }
      if (attributes.createdAtUntil) {
        if (attributes.createdAtUntil instanceof Date) {
          this.createdAtUntil = attributes.createdAtUntil
        } else {
          this.createdAtUntil = new Date(attributes.createdAtUntil)
        }
      }
      if (attributes.updatedAtFrom) {
        if (attributes.updatedAtFrom instanceof Date) {
          this.updatedAtFrom = attributes.updatedAtFrom
        } else {
          this.updatedAtFrom = new Date(attributes.updatedAtFrom)
        }
      }
      if (attributes.updatedAtUntil) {
        if (attributes.updatedAtUntil instanceof Date) {
          this.updatedAtUntil = attributes.updatedAtUntil
        } else {
          this.updatedAtUntil = new Date(attributes.updatedAtUntil)
        }
      }
    }
  }
}
