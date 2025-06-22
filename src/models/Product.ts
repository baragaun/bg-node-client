import { BaseModel } from './BaseModel.js';

export class Product extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public importId = '';
  public vendorId = '';
  public vendorImportId?: string | null;
  public name = '';
  public description?: string | null;
  public categories?: string[] | null;
  public slug?: string | null;
  public url?: string | null;
  public imageSourceFront?: string | null;
  public imageSourceBack?: string | null;
  public hasBarcode?: boolean | null;
  public barcodeFormat?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  public constructor(attributes?: Partial<Product>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.importId !== undefined) {
        this.importId = attributes.importId;
      }
      if (attributes.vendorId !== undefined) {
        this.vendorId = attributes.vendorId;
      }
      if (attributes.vendorImportId !== undefined) {
        this.vendorImportId = attributes.vendorImportId;
      }
      if (attributes.name !== undefined) {
        this.name = attributes.name;
      }
      if (attributes.description !== undefined) {
        this.description = attributes.description;
      }
      if (attributes.categories !== undefined) {
        this.categories = attributes.categories;
      }
      if (attributes.slug !== undefined) {
        this.slug = attributes.slug;
      }
      if (attributes.url !== undefined) {
        this.url = attributes.url;
      }
      if (attributes.imageSourceFront !== undefined) {
        this.imageSourceFront = attributes.imageSourceFront;
      }
      if (attributes.imageSourceBack !== undefined) {
        this.imageSourceBack = attributes.imageSourceBack;
      }
      if (attributes.hasBarcode !== undefined) {
        this.hasBarcode = attributes.hasBarcode;
      }
      if (attributes.barcodeFormat !== undefined) {
        this.barcodeFormat = attributes.barcodeFormat;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
