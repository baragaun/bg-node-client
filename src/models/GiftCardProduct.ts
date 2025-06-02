import { BaseModel } from './BaseModel.js';
import { GiftCardDenomination } from './GiftCardDenomination.js';

export class GiftCardProduct extends BaseModel {
  public importId = '';
  public vendorId = '';
  public genericGiftCardId = '';
  public vendorImportId = '';
  public isGeneric?: boolean | null;
  public imageSourceFront?: string | null;
  public imageSourceBack?: string | null;
  public hasBarcode?: boolean | null;
  public barcodeFormat?: string | null;
  public hasPin?: boolean | null;
  public termsEn?: string | null;
  public termsUrl?: string | null;
  public instructionsEn?: string | null;
  public instructionsUrl?: string | null;
  public denominations?: GiftCardDenomination[] | null;

  constructor(attributes?: Partial<GiftCardProduct>) {
    super(attributes);

    if (attributes) {
      if (attributes.importId) {
        this.importId = attributes.importId;
      }
      if (attributes.vendorId) {
        this.vendorId = attributes.vendorId;
      }
      if (attributes.genericGiftCardId) {
        this.genericGiftCardId = attributes.genericGiftCardId;
      }
      if (attributes.vendorImportId) {
        this.vendorImportId = attributes.vendorImportId;
      }
      if (attributes.isGeneric !== undefined) {
        this.isGeneric = attributes.isGeneric;
      }
      if (attributes.imageSourceFront) {
        this.imageSourceFront = attributes.imageSourceFront;
      }
      if (attributes.imageSourceBack) {
        this.imageSourceBack = attributes.imageSourceBack;
      }
      if (attributes.hasBarcode !== undefined) {
        this.hasBarcode = attributes.hasBarcode;
      }
      if (attributes.barcodeFormat) {
        this.barcodeFormat = attributes.barcodeFormat;
      }
      if (attributes.hasPin !== undefined) {
        this.hasPin = attributes.hasPin;
      }
      if (attributes.termsEn) {
        this.termsEn = attributes.termsEn;
      }
      if (attributes.termsUrl) {
        this.termsUrl = attributes.termsUrl;
      }
      if (attributes.instructionsEn) {
        this.instructionsEn = attributes.instructionsEn;
      }
      if (attributes.instructionsUrl) {
        this.instructionsUrl = attributes.instructionsUrl;
      }
      if (attributes.denominations) {
        this.denominations = attributes.denominations;
      }
    }
  }
}
