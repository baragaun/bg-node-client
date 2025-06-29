import { BaseModel } from './BaseModel.js';
export class Brand extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
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
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
//# sourceMappingURL=Brand.js.map