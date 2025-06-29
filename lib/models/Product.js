import { BaseModel } from './BaseModel.js';
export class Product extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    importId = '';
    brandId = '';
    brandImportId;
    name = '';
    description;
    categories;
    slug;
    url;
    imageSourceFront;
    imageSourceBack;
    hasBarcode;
    barcodeFormat;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.importId !== undefined) {
                this.importId = attributes.importId;
            }
            if (attributes.brandId !== undefined) {
                this.brandId = attributes.brandId;
            }
            if (attributes.brandImportId !== undefined) {
                this.brandImportId = attributes.brandImportId;
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
//# sourceMappingURL=Product.js.map