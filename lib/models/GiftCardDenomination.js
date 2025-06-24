export class GiftCardDenomination {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    amount = 0;
    enabled = true;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.amount === 0 ||
                (attributes.amount &&
                    !isNaN(attributes.amount))) {
                this.amount = attributes.amount;
            }
            if (attributes.enabled !== undefined) {
                this.enabled = attributes.enabled;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=GiftCardDenomination.js.map