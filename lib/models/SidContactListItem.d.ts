import { BaseModel } from './BaseModel.js';
export declare abstract class SidContactListItem extends BaseModel {
    userId: string;
    channelId?: string | null;
    nickname?: string | null;
    typeTextIds: string[];
    favorite?: boolean | null;
    notes?: string | null;
    archivedAt?: string | null;
    protected constructor(attributes?: Partial<SidContactListItem>);
}
