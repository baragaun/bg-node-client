import { Company } from './Company.js';
import { SidUser } from './SidUser.js';
import { UploadedAsset } from './UploadedAsset.js';
import { UserBlock } from './UserBlock.js';

export class User extends SidUser {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public companyIds?: string[] | null;
  public companies?: Company[] | null = [];
  public avatarAsset?: UploadedAsset | null;
  public ssoIdp?: string | null;
  public userBlocks?: UserBlock[] | null = [];
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<User>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.companyIds !== undefined) {
        this.companyIds = attributes.companyIds;
      }
      if (attributes.companies !== undefined) {
        this.companies = attributes.companies;
      }
      if (attributes.avatarAsset !== undefined) {
        this.avatarAsset = attributes.avatarAsset;
      }
      if (attributes.ssoIdp !== undefined) {
        this.ssoIdp = attributes.ssoIdp;
      }
      if (attributes.userBlocks !== undefined) {
        this.userBlocks = attributes.userBlocks;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['firstName', 'lastName', 'userHandle', 'email'];
  }
}
