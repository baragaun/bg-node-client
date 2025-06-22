import { BaseModel } from './BaseModel.js';
import { UserRole } from '../enums.js';

export abstract class SidUserListFilter extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public ident?: string;
  public emailIn?: string[];
  public phoneNumberIn?: string[];
  public inviteCodeIn?: string[];
  public rolesIn?: UserRole[];
  public excludeRoles?: string[];
  public excludeContacts?: boolean | null;
  public createdAtGreaterThan?: string;
  public latestActivityAtGreaterThan?: string;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidUserListFilter>) {
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
