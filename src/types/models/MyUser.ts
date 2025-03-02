import { User } from "./User.js"

export class MyUser extends User {
  public constructor(attributes?: Partial<MyUser>) {
    super(attributes)
  }
}
