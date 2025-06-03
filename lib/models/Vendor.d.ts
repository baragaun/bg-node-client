import { BaseModel } from './BaseModel.js';
export declare class Vendor extends BaseModel {
    name: string;
    importId: string;
    imageSource?: string | null;
    slug?: string | null;
    url?: string | null;
    balanceLookupUri?: string | null;
    listed?: boolean | null;
    logoImageSource?: string | null;
    description?: string | null;
    alias1?: string | null;
    alias2?: string | null;
    alias3?: string | null;
    constructor(attributes?: Partial<Vendor>);
}
