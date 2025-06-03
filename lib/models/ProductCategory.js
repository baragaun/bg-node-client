export class ProductCategory {
    name = '';
    labelEn = '';
    priority = 0;
    constructor(attributes) {
        if (attributes) {
            if (attributes.name) {
                this.name = attributes.name;
            }
            if (attributes.labelEn) {
                this.labelEn = attributes.labelEn;
            }
            if (attributes.priority === 0 ||
                (attributes.priority &&
                    !isNaN(attributes.priority))) {
                this.priority = attributes.priority;
            }
        }
    }
}
//# sourceMappingURL=ProductCategory.js.map