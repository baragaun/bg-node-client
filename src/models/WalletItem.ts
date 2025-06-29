import { BaseModel } from './BaseModel.js';
import { BarcodeType, WalletItemSource } from '../enums.js';

export class WalletItem extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public walletId = '';
  public productId = '';
  public purchaseOrderItemId = '';
  public brandId = '';
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
  public issuedAt?: string | null;
  public expiresAt?: string | null;
  public balanceUpdatedAt?: string | null;
  public archivedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<WalletItem>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.walletId !== undefined) {
        this.walletId = attributes.walletId;
      }
      if (attributes.productId !== undefined) {
        this.productId = attributes.productId;
      }
      if (attributes.purchaseOrderItemId !== undefined) {
        this.purchaseOrderItemId = attributes.purchaseOrderItemId;
      }
      if (attributes.brandId !== undefined) {
        this.brandId = attributes.brandId;
      }
      if (attributes.name !== undefined) {
        this.name = attributes.name;
      }
      if (
        attributes.price === null ||
        attributes.price === 0 ||
        (
          attributes.price &&
          !isNaN(attributes.price)
        )
      ) {
        this.price = attributes.price;
      }
      if (
        attributes.initialBalance === null ||
        attributes.initialBalance === 0 ||
        (
          attributes.initialBalance &&
          !isNaN(attributes.initialBalance)
        )
      ) {
        this.initialBalance = attributes.initialBalance;
      }
      if (
        attributes.balance === null ||
        attributes.balance === 0 ||
        (
          attributes.balance &&
          !isNaN(attributes.balance)
        )
      ) {
        this.balance = attributes.balance;
      }
      if (attributes.code !== undefined) {
        this.code = attributes.code;
      }
      if (attributes.hasBarcode !== undefined) {
        this.hasBarcode = attributes.hasBarcode;
      }
      if (attributes.barcodeFormat !== undefined) {
        this.barcodeFormat = attributes.barcodeFormat;
      }
      if (attributes.pin !== undefined) {
        this.pin = attributes.pin;
      }
      if (attributes.source !== undefined) {
        this.source = attributes.source;
      }
      if (attributes.imageSourceFront !== undefined) {
        this.imageSourceFront = attributes.imageSourceFront;
      }
      if (attributes.imageSourceBack !== undefined) {
        this.imageSourceBack = attributes.imageSourceBack;
      }
      if (attributes.referenceUrl !== undefined) {
        this.referenceUrl = attributes.referenceUrl;
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
      if (
        attributes.sortIndex === null ||
        attributes.sortIndex === 0 ||
        (
          attributes.sortIndex &&
          !isNaN(attributes.sortIndex)
        )
      ) {
        this.sortIndex = attributes.sortIndex;
      }
      if (attributes.issuedAt !== undefined && attributes.issuedAt !== '') {
        this.issuedAt = attributes.issuedAt;
      }
      if (attributes.expiresAt !== undefined && attributes.expiresAt !== '') {
        this.expiresAt = attributes.expiresAt;
      }
      if (attributes.balanceUpdatedAt !== undefined && attributes.balanceUpdatedAt !== '') {
        this.balanceUpdatedAt = attributes.balanceUpdatedAt;
      }
      if (attributes.archivedAt !== undefined && attributes.archivedAt !== '') {
        this.archivedAt = attributes.archivedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
