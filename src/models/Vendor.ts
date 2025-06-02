import { BaseModel } from './BaseModel.js';

export class Vendor extends BaseModel {
  public name = '';
  public importId = '';
  public imageSource?: string | null;
  public slug?: string | null;
  public url?: string | null;
  public balanceLookupUri?: string | null;
  public listed?: boolean | null;
  public logoImageSource?: string | null;
  public description?: string | null;
  public alias1?: string | null;
  public alias2?: string | null;
  public alias3?: string | null;

  constructor(attributes?: Partial<Vendor>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.name) {
        this.name = attributes.name;
      }
      if (attributes.importId) {
        this.importId = attributes.importId;
      }
      if (attributes.imageSource) {
        this.imageSource = attributes.imageSource;
      }
      if (attributes.slug) {
        this.slug = attributes.slug;
      }
      if (attributes.url) {
        this.url = attributes.url;
      }
      if (attributes.balanceLookupUri) {
        this.balanceLookupUri = attributes.balanceLookupUri;
      }
      if (attributes.listed !== undefined) {
        this.listed = attributes.listed;
      }
      if (attributes.logoImageSource) {
        this.logoImageSource = attributes.logoImageSource;
      }
      if (attributes.description) {
        this.description = attributes.description;
      }
      if (attributes.alias1) {
        this.alias1 = attributes.alias1;
      }
      if (attributes.alias2) {
        this.alias2 = attributes.alias2;
      }
      if (attributes.alias3) {
        this.alias3 = attributes.alias3;
      }
    }
  }
}
