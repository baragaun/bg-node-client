import { BaseModel } from './BaseModel.js';
export declare abstract class SidContactListFilter extends BaseModel {
    userIdIn?: string[];
    protected constructor(attributes?: Partial<SidContactListFilter>);
}
