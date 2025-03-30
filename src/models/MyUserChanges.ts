import { MyUser } from './MyUser.js';

export class MyUserChanges extends MyUser {
  public currentPassword?: string | null;
  public newPassword?: string | null;

  public constructor(attributes?: Partial<MyUserChanges>) {
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
