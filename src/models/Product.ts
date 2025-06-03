import { BaseModel } from './BaseModel.js';

export class Product extends BaseModel {
  public importId = '';
  public vendorId = '';
  public vendorImportId?: string | null;
  public name = '';
  public description = '';
  public categories?: string[] | null;
  public slug?: string | null;
  public url = '';
  public imageSourceFront?: string | null;
  public imageSourceBack?: string | null;
  public hasBarcode?: boolean | null;
  public barcodeFormat?: string | null;

  constructor(attributes?: Partial<Product>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.importId) {
        this.importId = attributes.importId;
      }
      if (attributes.vendorId) {
        this.vendorId = attributes.vendorId;
      }
      if (attributes.vendorImportId) {
        this.vendorImportId = attributes.vendorImportId;
      }
      if (attributes.name) {
        this.name = attributes.name;
      }
      if (attributes.description) {
        this.description = attributes.description;
      }
      if (attributes.categories) {
        this.categories = attributes.categories;
      }
      if (attributes.slug) {
        this.slug = attributes.slug;
      }
      if (attributes.url) {
        this.url = attributes.url;
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
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
