import { SortDirection } from '../enums.js';
export declare class SortItem {
    field: string;
    direction?: SortDirection;
    constructor(attributes?: Partial<SortItem>);
}
