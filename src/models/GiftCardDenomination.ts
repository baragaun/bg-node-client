export class GiftCardDenomination {
  public amount = 0;
  public enabled = true;

  constructor(attributes?: Partial<GiftCardDenomination>) {
    if (attributes) {
      if (
        attributes.amount === 0 ||
        (
          attributes.amount &&
          !isNaN(attributes.amount)
        )
      ) {
        this.amount = attributes.amount;
      }
      if (attributes.enabled !== undefined) {
        this.enabled = attributes.enabled;
      }
    }
  }
}
