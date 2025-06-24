import { ContentStatus } from './ContentStatus.js';
import { Model } from './Model.js';

export class ClientInfo extends Model {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public myUserId?: string;
  public authToken?: string;
  public myUserDeviceUuid?: string;
  public signedOutUserId?: string;
  public localContentStatus?: ContentStatus;
  public remoteContentStatus?: ContentStatus;
  public sessionStartedAt?: number | null;
  public sessionEndedAt?: number | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  public constructor(attributes?: Partial<ClientInfo> | null) {
    super(attributes);

    if (!this.id) {
      this.id = 'default';
    }

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
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
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }

    if (!this.myUserDeviceUuid) {
      this.myUserDeviceUuid = ClientInfo.createDeviceUuid();
    }
  }

  public get isSignedIn(): boolean {
    return !!(this.myUserId && this.myUserDeviceUuid && this.authToken);
  }

  public get isSessionActive(): boolean {
    return this.isSignedIn && !!this.sessionStartedAt && !this.sessionEndedAt;
  }

  public static createDeviceUuid(): string {
    return crypto.randomUUID().replaceAll('-', '');
  }
}
