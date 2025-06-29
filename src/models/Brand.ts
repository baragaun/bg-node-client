import { BaseModel } from './BaseModel.js';

export class Brand extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
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
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<Brand>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.name !== undefined) {
        this.name = attributes.name;
      }
      if (attributes.importId !== undefined) {
        this.importId = attributes.importId;
      }
      if (attributes.imageSource !== undefined) {
        this.imageSource = attributes.imageSource;
      }
      if (attributes.slug !== undefined) {
        this.slug = attributes.slug;
      }
      if (attributes.url !== undefined) {
        this.url = attributes.url;
      }
      if (attributes.balanceLookupUri !== undefined) {
        this.balanceLookupUri = attributes.balanceLookupUri;
      }
      if (attributes.listed !== undefined) {
        this.listed = attributes.listed;
      }
      if (attributes.logoImageSource !== undefined) {
        this.logoImageSource = attributes.logoImageSource;
      }
      if (attributes.description !== undefined) {
        this.description = attributes.description;
      }
      if (attributes.alias1 !== undefined) {
        this.alias1 = attributes.alias1;
      }
      if (attributes.alias2 !== undefined) {
        this.alias2 = attributes.alias2;
      }
      if (attributes.alias3 !== undefined) {
        this.alias3 = attributes.alias3;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
