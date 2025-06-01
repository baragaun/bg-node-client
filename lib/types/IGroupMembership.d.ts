import { GroupMembershipRole } from '../enums.js';
export declare abstract class IGroupMembership {
    id: string;
    groupId: string;
    groupIdent: string;
    userId: string;
    roles: GroupMembershipRole[];
    constructor(attributes?: Partial<IGroupMembership>);
}
