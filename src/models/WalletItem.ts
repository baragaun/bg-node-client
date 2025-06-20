import { BaseModel } from './BaseModel.js';
import { BarcodeType, WalletItemSource } from '../enums.js';

export class WalletItem extends BaseModel {
  public walletId = '';
  public productId = '';
  public purchaseOrderItemId = '';
  public vendorId = '';
  public name = '';
  public price = 0;
  public initialBalance = 0;
  public balance = 0;
  public code?: string | null;
  public hasBarcode?: boolean | null;
  public barcodeFormat?: BarcodeType | null;
  public pin?: string | null;
  public source?: WalletItemSource | null;
  public imageSourceFront?: string | null;
  public imageSourceBack?: string | null;
  public referenceUrl?: string | null;
  public termsEn?: string | null;
  public termsUrl?: string | null;
  public instructionsEn?: string | null;
  public instructionsUrl?: string | null;
  public sortIndex = 0;
  public issuedAt?: Date | null;
  public expiresAt?: Date | null;
  public balanceUpdatedAt?: Date | null;
  public archivedAt?: Date | null;

  constructor(attributes?: Partial<WalletItem>) {
    super(attributes);

    if (attributes) {
      if (attributes.walletId) {
        this.walletId = attributes.walletId;
      }
      if (attributes.productId) {
        this.productId = attributes.productId;
      }
      if (attributes.purchaseOrderItemId) {
        this.purchaseOrderItemId = attributes.purchaseOrderItemId;
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
        attributes.initialBalance === 0 ||
        (
          attributes.initialBalance &&
          !isNaN(attributes.initialBalance)
        )
      ) {
        this.initialBalance = attributes.initialBalance;
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
      if (attributes.code) {
        this.code = attributes.code;
      }
      if (attributes.hasBarcode !== undefined) {
        this.hasBarcode = attributes.hasBarcode;
      }
      if (attributes.barcodeFormat) {
        this.barcodeFormat = attributes.barcodeFormat;
      }
      if (attributes.pin) {
        this.pin = attributes.pin;
      }
      if (attributes.source) {
        this.source = attributes.source;
      }
      if (attributes.imageSourceFront) {
        this.imageSourceFront = attributes.imageSourceFront;
      }
      if (attributes.imageSourceBack) {
        this.imageSourceBack = attributes.imageSourceBack;
      }
      if (attributes.referenceUrl) {
        this.referenceUrl = attributes.referenceUrl;
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
      if (attributes.issuedAt) {
        if (attributes.issuedAt instanceof Date) {
          this.issuedAt = attributes.issuedAt;
        } else {
          this.issuedAt = new Date(attributes.issuedAt);
        }
      }
      if (attributes.expiresAt) {
        if (attributes.expiresAt instanceof Date) {
          this.expiresAt = attributes.expiresAt;
        } else {
          this.expiresAt = new Date(attributes.expiresAt);
        }
      }
      if (attributes.balanceUpdatedAt) {
        if (attributes.balanceUpdatedAt instanceof Date) {
          this.balanceUpdatedAt = attributes.balanceUpdatedAt;
        } else {
          this.balanceUpdatedAt = new Date(attributes.balanceUpdatedAt);
        }
      }
      if (attributes.archivedAt) {
        if (attributes.archivedAt instanceof Date) {
          this.archivedAt = attributes.archivedAt;
        } else {
          this.archivedAt = new Date(attributes.archivedAt);
        }
      }
    }
  }
}
