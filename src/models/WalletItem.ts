import { BaseModel } from './BaseModel.js';

export class WalletItem extends BaseModel {
  public walletId = '';

  public productId = '';

  public orderItemId = '';

  public vendorId = '';

  public name = '';

  public price = 0;

  public balance = 0;

  public imageSourceFront?: string | null;

  public imageSourceBack?: string | null;

  public hasBarcode?: boolean | null;

  public barcodeFormat?: string | null;

  public termsEn?: string | null;

  public termsUrl?: string | null;

  public instructionsEn?: string | null;

  public instructionsUrl?: string | null;

  public sortIndex = 0;

  public archivedAt?: Date | null;

  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<WalletItem>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.walletId) {
        this.walletId = attributes.walletId;
      }
      if (attributes.productId) {
        this.productId = attributes.productId;
      }
      if (attributes.orderItemId) {
        this.orderItemId = attributes.orderItemId;
      }
      if (attributes.vendorId) {
        this.vendorId = attributes.vendorId;
      }
      if (attributes.name) {
        this.name = attributes.name;
      }
      if (
        attributes.price === 0 ||
        (
          attributes.price &&
          !isNaN(attributes.price)
        )
      ) {
        this.price = attributes.price;
      }
      if (
        attributes.balance === 0 ||
        (
          attributes.balance &&
          !isNaN(attributes.balance)
        )
      ) {
        this.balance = attributes.balance;
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
      if (
        attributes.sortIndex === 0 ||
        (
          attributes.sortIndex &&
          !isNaN(attributes.sortIndex)
        )
      ) {
        this.sortIndex = attributes.sortIndex;
      }
      if (attributes.archivedAt) {
        if (attributes.archivedAt instanceof Date) {
          this.archivedAt = attributes.archivedAt;
        } else {
          this.archivedAt = new Date(attributes.archivedAt);
        }
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
