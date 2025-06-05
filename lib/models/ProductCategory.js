export class ProductCategory {
    id = '';
    name = '';
    labelEn = '';
    sortIndex = 0;
    constructor(attributes) {
        if (attributes) {
            if (attributes.id) {
                this.id = attributes.id;
            }
            if (attributes.name) {
                this.name = attributes.name;
            }
            if (attributes.labelEn) {
                this.labelEn = attributes.labelEn;
            }
            if (attributes.sortIndex === 0 ||
                (attributes.sortIndex &&
                    !isNaN(attributes.sortIndex))) {
                this.sortIndex = attributes.sortIndex;
            }
        }
    }
}
//# sourceMappingURL=ProductCategory.js.map