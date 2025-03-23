import { BaseModel } from './BaseModel.js';
export declare abstract class SidContact extends BaseModel {
    userId: string;
    channelId?: string | null;
    nickname?: string | null;
    typeTextIds: string[];
    favorite?: boolean | null;
    notes?: string | null;
    archivedAt?: Date | null;
    protected constructor(attributes?: Partial<SidContact>);
}
