import { BaseModel } from './BaseModel.js';
import { ShoppingCartItem } from './ShoppingCartItem.js';
export declare class ShoppingCart extends BaseModel {
    sumItemPrice: number;
    totalPrice: number;
    vat: number;
    items: ShoppingCartItem[];
    constructor(attributes?: Partial<ShoppingCart>);
}
