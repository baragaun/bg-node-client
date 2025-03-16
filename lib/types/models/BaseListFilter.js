export class BaseListFilter {
    ids;
    excludeIds;
    searchText;
    caseSensitive;
    textSearchFields;
    createdAtFrom;
    createdAtUntil;
    updatedAtFrom;
    updatedAtUntil;
    constructor(attributes) {
        if (attributes) {
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
        }
    }
}
//# sourceMappingURL=BaseListFilter.js.map