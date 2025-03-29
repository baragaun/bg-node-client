import { MyUser } from './MyUser.js';
export class MyUserChanges extends MyUser {
    currentPassword;
    newPassword;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.currentPassword) {
                this.currentPassword = attributes.currentPassword;
            }
            if (attributes.newPassword) {
                this.newPassword = attributes.newPassword;
            }
        }
    }
}
//# sourceMappingURL=MyUserChanges.js.map