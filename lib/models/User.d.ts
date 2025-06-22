import { Company } from './Company.js';
import { SidUser } from './SidUser.js';
import { UploadedAsset } from './UploadedAsset.js';
import { UserBlock } from './UserBlock.js';
export declare class User extends SidUser {
    companyIds?: string[] | null;
    companies?: Company[] | null;
    avatarAsset?: UploadedAsset | null;
    ssoIdp?: string | null;
    userBlocks?: UserBlock[] | null;
    constructor(attributes?: Partial<User>);
    static get searchFields(): string[];
}
