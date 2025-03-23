import { ContentStatus } from './ContentStatus.js';
import { Model } from './Model.js';
export declare class ClientInfo extends Model {
    myUserId?: string;
    authToken?: string;
    myUserDeviceUuid?: string;
    signedOutUserId?: string;
    localContentStatus?: ContentStatus;
    remoteContentStatus?: ContentStatus;
    sessionStartedAt?: number | null;
    sessionEndedAt?: number | null;
    constructor(attributes?: Partial<ClientInfo> | null);
    static createDeviceUuid(): string;
}
