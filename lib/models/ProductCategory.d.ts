import { BaseModel } from './BaseModel.js';
export declare class ProductCategory extends BaseModel {
    importId: string;
    name: string;
    labelEn: string;
    sortIndex: number;
    constructor(attributes?: Partial<ProductCategory>);
}
