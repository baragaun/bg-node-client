import { BaseModel } from './BaseModel.js';
import { LabeledStringValue } from './LabeledStringValue.js';
import { UserBlock } from './UserBlock.js';
import { UserRole } from '../enums.js';
import { IGroupMembership } from '../types/IGroupMembership.js';
export declare class UserListItem extends BaseModel {
    firstName?: string | null;
    lastName?: string | null;
    userHandle?: string | null;
    avatarUrl?: string | null;
    genderTextId?: string | null;
    websites?: LabeledStringValue[] | null;
    preferredLanguageTextId?: string | null;
    spokenLanguagesTextIds: string[];
    countryOfResidenceTextId?: string | null;
    regionOfResidence?: string | null;
    cityOfResidence?: string | null;
    timezone?: string | null;
    roles: UserRole[];
    trustLevel: number;
    userBlocks?: UserBlock[] | null;
    latestActivityAt?: Date | null;
    seeksHelp?: boolean | null;
    offersHelp?: boolean | null;
    groupMemberships: IGroupMembership[];
    constructor(attributes?: Partial<UserListItem>);
    static get searchFields(): string[];
}
