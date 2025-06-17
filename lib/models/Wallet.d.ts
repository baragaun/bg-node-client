import { BaseModel } from './BaseModel.js';
import { WalletItem } from './WalletItem.js';
export declare class Wallet extends BaseModel {
    items: WalletItem[];
    constructor(attributes?: Partial<Wallet>);
}
