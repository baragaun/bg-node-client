export class LabeledStringValue {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    label;
    value = '';
    tags;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.label) {
                this.label = attributes.label;
            }
            if (attributes.value) {
                this.value = attributes.value;
            }
            if (attributes.tags) {
                this.tags = attributes.tags;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=LabeledStringValue.js.map