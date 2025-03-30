import { MyUser } from './MyUser.js';
export declare class MyUserChanges extends MyUser {
    currentPassword?: string | null;
    newPassword?: string | null;
    constructor(attributes?: Partial<MyUserChanges>);
}
