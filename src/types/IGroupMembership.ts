import { GroupMembershipRole } from '../enums.js';

export abstract class IGroupMembership {
  public id = '';
  public groupId = '';
  public groupIdent = '';
  public userId = '';
  public roles: GroupMembershipRole[] = [];

  constructor(attributes?: Partial<IGroupMembership>) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id;
      }
      if (attributes.groupId) {
        this.groupId = attributes.groupId;
      }
      if (attributes.groupIdent) {
        this.groupIdent = attributes.groupIdent;
      }
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.roles) {
        this.roles = attributes.roles;
      }
    }
  }
}
