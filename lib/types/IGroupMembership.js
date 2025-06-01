export class IGroupMembership {
    id = '';
    groupId = '';
    groupIdent = '';
    userId = '';
    roles = [];
    constructor(attributes) {
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
//# sourceMappingURL=IGroupMembership.js.map