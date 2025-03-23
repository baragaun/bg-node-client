import { ContentStatus } from './ContentStatus.js';
import { Model } from './Model.js';

export class ClientInfo extends Model {
  public myUserId?: string;
  public authToken?: string;
  public myUserDeviceUuid?: string;
  public signedOutUserId?: string;
  public localContentStatus?: ContentStatus;
  public remoteContentStatus?: ContentStatus;
  public sessionStartedAt?: number | null;
  public sessionEndedAt?: number | null;

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
      if (attributes.sessionStartedAt) {
        this.sessionStartedAt = attributes.sessionStartedAt;
      }
      if (attributes.sessionEndedAt) {
        this.sessionEndedAt = attributes.sessionEndedAt;
      }
    }
  }

  public static createDeviceUuid(): string {
    return crypto.randomUUID().replaceAll('-', '');
  }
}
