import { BaseModel } from './BaseModel.js';
export class Vendor extends BaseModel {
    name = '';
    importId = '';
    imageSource;
    slug;
    url;
    balanceLookupUri;
    listed;
    logoImageSource;
    description;
    alias1;
    alias2;
    alias3;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
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
//# sourceMappingURL=Vendor.js.map