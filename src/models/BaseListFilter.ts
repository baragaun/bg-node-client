export abstract class BaseListFilter {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public ids?: string[];
  public excludeIds?: string[];
  public searchText?: string;
  public caseSensitive?: boolean;
  public textSearchFields?: string[];
  public createdAtFrom?: Date | string | null;
  public createdAtUntil?: Date | string | null;
  public updatedAtFrom?: Date | string | null;
  public updatedAtUntil?: Date | string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<BaseListFilter> | null) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.ids) {
        this.ids = attributes.ids;
      }
      if (attributes.excludeIds) {
        this.excludeIds = attributes.excludeIds;
      }
      if (attributes.searchText) {
        this.searchText = attributes.searchText;
      }
      if (
        attributes.caseSensitive === true ||
        attributes.caseSensitive === false
      ) {
        this.caseSensitive = attributes.caseSensitive;
      }
      if (attributes.textSearchFields) {
        this.textSearchFields = attributes.textSearchFields;
      }
      if (attributes.createdAtFrom) {
        this.createdAtFrom = attributes.createdAtFrom;
      }
      if (attributes.createdAtUntil) {
        this.createdAtUntil = attributes.createdAtUntil;
      }
      if (attributes.updatedAtFrom) {
        this.updatedAtFrom = attributes.updatedAtFrom;
      }
      if (attributes.updatedAtUntil) {
        this.updatedAtUntil = attributes.updatedAtUntil;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
