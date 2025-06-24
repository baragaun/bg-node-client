import { BaseModel } from './BaseModel.js';
export class SidUserListFilter extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    ident;
    emailIn;
    phoneNumberIn;
    inviteCodeIn;
    rolesIn;
    excludeRoles;
    excludeContacts;
    createdAtGreaterThan;
    latestActivityAtGreaterThan;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.ident !== undefined) {
                this.ident = attributes.ident;
            }
            if (attributes.emailIn !== undefined) {
                this.emailIn = attributes.emailIn;
            }
            if (attributes.phoneNumberIn !== undefined) {
                this.phoneNumberIn = attributes.phoneNumberIn;
            }
            if (attributes.inviteCodeIn !== undefined) {
                this.inviteCodeIn = attributes.inviteCodeIn;
            }
            if (attributes.rolesIn !== undefined) {
                this.rolesIn = attributes.rolesIn;
            }
            if (attributes.excludeRoles !== undefined) {
                this.excludeRoles = attributes.excludeRoles;
            }
            if (attributes.excludeContacts !== undefined) {
                this.excludeContacts = attributes.excludeContacts;
            }
            if (attributes.createdAtGreaterThan !== undefined && attributes.createdAtGreaterThan !== '') {
                this.createdAtGreaterThan = attributes.createdAtGreaterThan;
            }
            if (attributes.latestActivityAtGreaterThan !== undefined && attributes.latestActivityAtGreaterThan !== '') {
                this.latestActivityAtGreaterThan = attributes.latestActivityAtGreaterThan;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidUserListFilter.js.map