"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledStringValue = void 0;
class LabeledStringValue {
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
exports.LabeledStringValue = LabeledStringValue;
