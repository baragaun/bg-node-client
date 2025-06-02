export class GiftCardDenomination {
    amount = 0;
    enabled = true;
    constructor(attributes) {
        if (attributes) {
            if (attributes.amount === 0 ||
                (attributes.amount &&
                    !isNaN(attributes.amount))) {
                this.amount = attributes.amount;
            }
            if (attributes.enabled !== undefined) {
                this.enabled = attributes.enabled;
            }
        }
    }
}
//# sourceMappingURL=GiftCardDenomination.js.map