import { ProductCategory } from './ProductCategory.js';
import { BaseModel } from './BaseModel.js';
export declare class Product extends BaseModel {
    importId: string;
    vendorId: string;
    vendorImportId?: string | null;
    name: string;
    description: string;
    categories?: ProductCategory[] | null;
    slug?: string | null;
    url: string;
    imageSourceFront?: string | null;
    imageSourceBack?: string | null;
    hasBarcode?: boolean | null;
    barcodeFormat?: string | null;
    constructor(attributes?: Partial<Product>);
}
