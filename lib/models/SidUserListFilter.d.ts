import { BaseModel } from './BaseModel.js';
import { UserRole } from '../enums.js';
export declare abstract class SidUserListFilter extends BaseModel {
    ident?: string;
    emailIn?: string[];
    phoneNumberIn?: string[];
    inviteCodeIn?: string[];
    rolesIn?: UserRole[];
    excludeRoles?: string[];
    excludeContacts?: boolean | null;
    createdAtGreaterThan?: string;
    latestActivityAtGreaterThan?: string;
    protected constructor(attributes?: Partial<SidUserListFilter>);
}
