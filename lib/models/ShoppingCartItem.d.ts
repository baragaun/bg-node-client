import { BaseModel } from './BaseModel.js';
export declare class ShoppingCartItem extends BaseModel {
    shoppingCartId: string;
    productId: string;
    count: number;
    price: number;
    totalPrice: number;
    constructor(attributes?: Partial<ShoppingCartItem>);
}
