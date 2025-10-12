import { SidUser } from './SidUser.js';
export class User extends SidUser {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    companyIds;
    companies = [];
    ethnicityTextIds;
    avatarAsset;
    ssoIdp;
    userBlocks = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.companyIds !== undefined) {
                this.companyIds = attributes.companyIds;
            }
            if (attributes.companies !== undefined) {
                this.companies = attributes.companies;
            }
            if (attributes.ethnicityTextIds !== undefined) {
                this.ethnicityTextIds = attributes.ethnicityTextIds;
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
    static get searchFields() {
        return ['firstName', 'lastName', 'userHandle', 'email'];
    }
}
//# sourceMappingURL=User.js.map