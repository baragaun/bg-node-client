import { BaseModel } from './BaseModel.js';
export declare class Product extends BaseModel {
    importId: string;
    brandId: string;
    brandImportId?: string | null;
    name: string;
    description?: string | null;
    categories?: string[] | null;
    slug?: string | null;
    url?: string | null;
    imageSourceFront?: string | null;
    imageSourceBack?: string | null;
    hasBarcode?: boolean | null;
    barcodeFormat?: string | null;
    constructor(attributes?: Partial<Product>);
}
