import { GiftCardDenomination } from './GiftCardDenomination.js';
import { Product } from './Product.js';

export class GiftCardProduct extends Product {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public genericGiftCardId?: string | null;
  public isGeneric?: boolean | null;
  public hasPin?: boolean | null;
  public termsEn?: string | null;
  public termsUrl?: string | null;
  public instructionsEn?: string | null;
  public instructionsUrl?: string | null;
  public denominations?: GiftCardDenomination[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<GiftCardProduct>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.genericGiftCardId !== undefined) {
        this.genericGiftCardId = attributes.genericGiftCardId;
      }
      if (attributes.isGeneric !== undefined) {
        this.isGeneric = attributes.isGeneric;
      }
      if (attributes.hasPin !== undefined) {
        this.hasPin = attributes.hasPin;
      }
      if (attributes.termsEn !== undefined) {
        this.termsEn = attributes.termsEn;
      }
      if (attributes.termsUrl !== undefined) {
        this.termsUrl = attributes.termsUrl;
      }
      if (attributes.instructionsEn !== undefined) {
        this.instructionsEn = attributes.instructionsEn;
      }
      if (attributes.instructionsUrl !== undefined) {
        this.instructionsUrl = attributes.instructionsUrl;
      }
      if (attributes.denominations !== undefined) {
        this.denominations = attributes.denominations;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
