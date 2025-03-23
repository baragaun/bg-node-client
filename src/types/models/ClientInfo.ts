import { ContentStatus } from './ContentStatus.js';
import { Model } from './Model.js';

export class ClientInfo extends Model {
  public myUserId?: string;
  public authToken?: string;
  public myUserDeviceUuid?: string;
  public signedOutUserId?: string;
  public localContentStatus?: ContentStatus;
  public remoteContentStatus?: ContentStatus;

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
      if (attributes.localContentStatus) {
        this.localContentStatus = attributes.localContentStatus;
      }
      if (attributes.remoteContentStatus) {
        this.remoteContentStatus = attributes.remoteContentStatus;
      }
    }
  }

  public static createDeviceUuid(): string {
    return crypto.randomUUID().replaceAll('-', '');
  }
}
