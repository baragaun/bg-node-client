import { Model } from './Model.js';

export class ClientInfo extends Model {
  public myUserId?: string;
  public authToken?: string;
  public myUserDeviceUuid?: string;
  public signedOutUserId?: string;

  public constructor(attributes?: Partial<ClientInfo> | null) {
    super(attributes);

    if (!this.id) {
      this.id = 'default';
    }

    if (attributes) {
      if (attributes.myUserId) {
        this.myUserId = attributes.myUserId;
      }
      if (attributes.authToken) {
        this.authToken = attributes.authToken;
      }
      if (attributes.myUserDeviceUuid) {
        this.myUserDeviceUuid = attributes.myUserDeviceUuid;
      }
      if (attributes.signedOutUserId) {
        this.signedOutUserId = attributes.signedOutUserId;
      }
    }
  }
}
