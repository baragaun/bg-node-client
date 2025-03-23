/** Copyright ©2024 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';

export abstract class SidContactMetadata extends BaseModelMetadata {
  public firstName?: string | null;
  public lastName?: string | null;
  public userHandle?: string | null;
  public avatarUrl?: string | null;

  protected constructor(attributes?: Partial<SidContactMetadata>) {
    super(attributes);

    if (attributes) {
      if (attributes.firstName) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName) {
        this.lastName = attributes.lastName;
      }
      if (attributes.userHandle) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.avatarUrl) {
        this.avatarUrl = attributes.avatarUrl;
      }
    }
  }
}
