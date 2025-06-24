import { BaseModel } from './BaseModel.js';
export declare abstract class SidUserMetadata extends BaseModel {
    totalTimeOnPlatform: number;
    protected constructor(attributes?: Partial<SidUserMetadata>);
}
