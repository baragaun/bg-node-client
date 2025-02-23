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
            if (attributes.caseSensitive === true || attributes.caseSensitive === false) {
                this.caseSensitive = attributes.caseSensitive;
            }
            if (attributes.textSearchFields) {
                this.textSearchFields = attributes.textSearchFields;
            }
            if (attributes.createdAtFrom) {
                if (attributes.createdAtFrom instanceof Date) {
                    this.createdAtFrom = attributes.createdAtFrom;
                }
                else {
                    this.createdAtFrom = new Date(attributes.createdAtFrom);
                }
            }
            if (attributes.createdAtUntil) {
                if (attributes.createdAtUntil instanceof Date) {
                    this.createdAtUntil = attributes.createdAtUntil;
                }
                else {
                    this.createdAtUntil = new Date(attributes.createdAtUntil);
                }
            }
            if (attributes.updatedAtFrom) {
                if (attributes.updatedAtFrom instanceof Date) {
                    this.updatedAtFrom = attributes.updatedAtFrom;
                }
                else {
                    this.updatedAtFrom = new Date(attributes.updatedAtFrom);
                }
            }
            if (attributes.updatedAtUntil) {
                if (attributes.updatedAtUntil instanceof Date) {
                    this.updatedAtUntil = attributes.updatedAtUntil;
                }
                else {
                    this.updatedAtUntil = new Date(attributes.updatedAtUntil);
                }
            }
        }
    }
}
//# sourceMappingURL=BaseListFilter.js.map