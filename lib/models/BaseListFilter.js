export class BaseListFilter {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    ids;
    excludeIds;
    searchText;
    caseSensitive;
    textSearchFields;
    createdAtFrom;
    createdAtUntil;
    updatedAtFrom;
    updatedAtUntil;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
            if (attributes.caseSensitive === true ||
                attributes.caseSensitive === false) {
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
//# sourceMappingURL=BaseListFilter.js.map