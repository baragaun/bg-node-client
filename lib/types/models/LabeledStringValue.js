export class LabeledStringValue {
    label;
    value = '';
    tags;
    constructor(attributes) {
        if (attributes) {
            if (attributes.label) {
                this.label = attributes.label;
            }
            if (attributes.value) {
                this.value = attributes.value;
            }
            if (attributes.tags) {
                this.tags = attributes.tags;
            }
        }
    }
}
//# sourceMappingURL=LabeledStringValue.js.map