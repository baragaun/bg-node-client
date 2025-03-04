import { BaseModel } from './BaseModel.js';
import { BgChannelInbox } from './BgChannelInbox.js';

export class UserInbox extends BaseModel {
  public userId = '';
  public channels?: BgChannelInbox | null;

  constructor(attributes?: Partial<UserInbox>) {
    super(attributes);

    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.channels) {
        this.channels = attributes.channels;
      }
    }
  }
}
