import { BaseModel } from './BaseModel.js';
export class Product extends BaseModel {
    importId = '';
    vendorId = '';
    vendorImportId;
    name = '';
    description = '';
    categories;
    slug;
    url = '';
    imageSourceFront;
    imageSourceBack;
    hasBarcode;
    barcodeFormat;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
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
        }
    }
}
//# sourceMappingURL=Product.js.map